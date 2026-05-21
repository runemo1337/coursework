export const getSavedPlayers = () => {
    const list = localStorage.getItem('players_list');
    if (list === null) {
        return [];
    }
    return JSON.parse(list);
}

const savePlayersList = (players) => {
    localStorage.setItem('players_list', JSON.stringify(players))
}

export const loadPlayerData = (name) => {
  const data = localStorage.getItem(`player_${name}`);
  if (data === null) {
    return null;
  }
  return JSON.parse(data);
};


export const savePlayerData = (playerData) => {
  const { name } = playerData;
  
  localStorage.setItem(`player_${name}`, JSON.stringify(playerData));
  
  const players = getSavedPlayers();
  
  if (!players.includes(name)) {
    players.push(name);
    savePlayersList(players);
  }
};


export const deletePlayerData = (name) => {
  localStorage.removeItem(`player_${name}`);

  let players = getSavedPlayers();

  players = players.filter(playerName => playerName !== name);

  savePlayersList(players);
};

export const clearAllData = () => {
  const players = getSavedPlayers();

  players.forEach(name => {
    localStorage.removeItem(`player_${name}`);
  });

  localStorage.removeItem('players_list');
};