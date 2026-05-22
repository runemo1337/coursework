import { useState } from 'react';
import Character from './components/Characters';
import './App.css';
import Dialogue from './components/Dialogue';
import Report from './components/Report';
import { addSkillPoints } from './utils/gameLogic';
import AIChat from './components/AIChat';
import TasksBoard from './components/TasksBoard';
import { characterPrompts } from './data/characterPrompts';
import PlayerSelect from './components/PlayerSelect';
import NameInput from './components/NameInput';
import { 
  loadPlayerData, 
  savePlayerData, 
  saveSkills, 
  clearSkillsByPlayer 
} from './utils/saveSystem';

function App() {
  const [stage, setStage] = useState('select');
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [skills, setSkills] = useState({
    logic: 0,
    creativity: 0,
    systems: 0,
    analytics: 0,
    attention: 0
  });

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  const [showReport, setShowReport] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [selectedAIMentor, setSelectedAIMentor] = useState(null);
  const [showTaskBoard, setShowTaskBoard] = useState(false);

  // Выбор существующего игрока
  const handleSelectPlayer = (name) => {
    const playerData = loadPlayerData(name);
    if (playerData) {
      setCurrentPlayer(playerData);
      setSkills(playerData.skills);
      setStage('game');
    }
  };

  // Создание нового игрока
  const handleCreateNew = () => {
    setStage('nameInput');
  };

  // Сохранение нового имени
  const handleSaveName = (name) => {
    const newPlayer = {
      name: name,
      skills: {
        logic: 0,
        creativity: 0,
        systems: 0,
        analytics: 0,
        attention: 0
      }
    };
    savePlayerData(newPlayer);
    setCurrentPlayer(newPlayer);
    setSkills(newPlayer.skills);
    setStage('game');
  };

  // AI Чат
  if (showAIChat && selectedAIMentor) {
    return (
      <AIChat
        characterPrompt={characterPrompts[selectedAIMentor]}
        characterName={selectedAIMentor}
        onClose={() => setShowAIChat(false)}
      />
    );
  }

  // Доска задач
  if (showTaskBoard) {
    return (
      <TasksBoard
        onClose={() => setShowTaskBoard(false)}
        skills={skills}
        setSkills={setSkills}
        playerName={currentPlayer?.name}
      />
    );
  }

  if (selectedCharacter) {
    return (
      <Dialogue
        characterName={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        onSkillGain={(skill, points, secondarySkill, secondaryPoints) => {
          const newSkills = addSkillPoints(skills, skill, points, secondarySkill, secondaryPoints);
          setSkills(newSkills);
          if (currentPlayer?.name) {
            saveSkills(currentPlayer.name, newSkills);
          }
        }}
      />
    );
  }

  if (showReport) {
    return <Report skills={skills} onRestart={() => {
      if (currentPlayer?.name) {
        clearSkillsByPlayer(currentPlayer.name);
        localStorage.removeItem(`completedTasks_${currentPlayer.name}`);
      }
      setSkills({
        logic: 0,
        creativity: 0,
        systems: 0,
        analytics: 0,
        attention: 0
      });
      setShowReport(false);
    }} />;
  }

  if (stage === 'select') {
    return <PlayerSelect onSelectPlayer={handleSelectPlayer} onCreateNew={handleCreateNew} />;
  }

  if (stage === 'nameInput') {
    return <NameInput onSave={handleSaveName} />;
  }

  // Основная игра
  return (
    <div>
      <div className="characters-container">
        <Character name="Егор" role="Backend" onSelect={handleCharacterClick} />
        <Character name="Маша" role="Frontend" onSelect={handleCharacterClick} />
        <Character name="Андрей" role="DevOps" onSelect={handleCharacterClick} />
        <Character name="Вова" role="Data Science" onSelect={handleCharacterClick} />
        <Character name="Дмитрий" role="QA" onSelect={handleCharacterClick} />
      </div>

      <div className="buttons-container">
        <button onClick={() => setShowReport(true)}>Завершить игру</button>

        <button onClick={() => {
          setSelectedAIMentor('Егор');
          setShowAIChat(true);
        }}>🤖 Спросить Егора (AI)</button>
        
        <button onClick={() => {
          setSelectedAIMentor('Маша');
          setShowAIChat(true);
        }}>🤖 Спросить Машу (AI)</button>
        
        <button onClick={() => {
          setSelectedAIMentor('Андрей');
          setShowAIChat(true);
        }}>🤖 Спросить Андрея (AI)</button>
        
        <button onClick={() => {
          setSelectedAIMentor('Вова');
          setShowAIChat(true);
        }}>🤖 Спросить Вову (AI)</button>
        
        <button onClick={() => {
          setSelectedAIMentor('Дмитрий');
          setShowAIChat(true);
        }}>🤖 Спросить Дмитрия (AI)</button>
        
        <button 
          className="task-board-button" 
          onClick={() => setShowTaskBoard(true)}
        >
          <img src="/buttons/task-board-icon.png" alt="Доска задач" />
        </button>
        
        <button onClick={() => {
          setStage('select');
          setSelectedCharacter(null);
          setShowReport(false);
          setShowAIChat(false);
          setShowTaskBoard(false);
        }}>🚪 Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default App;