// ========== ОСНОВНЫЕ ФУНКЦИИ ДЛЯ ИГРОКОВ ==========

// Получить список всех сохранённых игроков
export const getSavedPlayers = () => {
  const list = localStorage.getItem('players_list');
  if (list === null) {
    return [];
  }
  return JSON.parse(list);
};

// Сохранить список игроков (вспомогательная функция)
const savePlayersList = (players) => {
  localStorage.setItem('players_list', JSON.stringify(players));
};

// Загрузить данные конкретного игрока по имени
export const loadPlayerData = (name) => {
  const data = localStorage.getItem(`player_${name}`);
  if (data === null) {
    return null;
  }
  const player = JSON.parse(data);
  // Для старых игроков, у которых нет поля tutorialCompleted
  if (player.tutorialCompleted === undefined) {
    player.tutorialCompleted = false;
  }
  return player;
};

// Сохранить данные игрока
export const savePlayerData = (playerData) => {
  const { name } = playerData;
  
  localStorage.setItem(`player_${name}`, JSON.stringify(playerData));
  
  const players = getSavedPlayers();
  
  if (!players.includes(name)) {
    players.push(name);
    savePlayersList(players);
  }
};

// Удалить сохранение игрока
export const deletePlayerData = (name) => {
  // 1. Удаляем данные игрока
  localStorage.removeItem(`player_${name}`);
  
  // 2. Удаляем выполненные задачи этого игрока
  localStorage.removeItem(`completedTasks_${name}`);
  
  // 3. Получаем текущий список игроков
  let players = getSavedPlayers();
  
  // 4. Убираем имя из списка
  players = players.filter(playerName => playerName !== name);
  
  // 5. Сохраняем обновлённый список
  savePlayersList(players);
};

// Очистить все данные (для отладки)
export const clearAllData = () => {
  const players = getSavedPlayers();

  players.forEach(name => {
    localStorage.removeItem(`player_${name}`);
  });

  localStorage.removeItem('players_list');
};

// ========== ФУНКЦИИ ДЛЯ НАВЫКОВ (ЗАМЕНЯЮТ storage.js) ==========

// Сохранить навыки текущего игрока
export const saveSkills = (playerName, skills) => {
  const playerData = loadPlayerData(playerName);
  if (playerData) {
    playerData.skills = skills;
    savePlayerData(playerData);
  }
};

// Загрузить навыки текущего игрока
export const loadSkillsByPlayer = (playerName) => {
  const playerData = loadPlayerData(playerName);
  if (playerData && playerData.skills) {
    return playerData.skills;
  }
  return {
    logic: 0,
    creativity: 0,
    systems: 0,
    analytics: 0,
    attention: 0
  };
};

// Очистить навыки игрока (при сбросе)
export const clearSkillsByPlayer = (playerName) => {
  const playerData = loadPlayerData(playerName);
  if (playerData) {
    playerData.skills = {
      logic: 0,
      creativity: 0,
      systems: 0,
      analytics: 0,
      attention: 0
    };
    savePlayerData(playerData);
  }
};