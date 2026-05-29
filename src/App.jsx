import { useState, useEffect } from 'react';
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
import { tasks } from './data/tasks';
import { 
  loadPlayerData, 
  savePlayerData, 
  saveSkills, 
  clearSkillsByPlayer 
} from './utils/saveSystem';
import MentorSelection from './components/MentorSelection';

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
    // Автоматическое выполнение задания "Познакомься с X"
    const introTask = tasks.find(t => t.mentorRequired === characterName && t.action === 'startDialogue');
    if (introTask && introTask.done !== true) {
      // Отмечаем задание выполненным
      const completedTasks = JSON.parse(localStorage.getItem(`completedTasks_${currentPlayer?.name}`) || '[]');
      if (!completedTasks.includes(introTask.id)) {
        completedTasks.push(introTask.id);
        localStorage.setItem(`completedTasks_${currentPlayer?.name}`, JSON.stringify(completedTasks));
        
        // Начисляем очки
        const newSkills = addSkillPoints(skills, introTask.skill, introTask.points);
        setSkills(newSkills);
        if (currentPlayer?.name) {
          saveSkills(currentPlayer.name, newSkills);
        }
      }
    }
    setSelectedCharacter(characterName);
  };

  const [showReport, setShowReport] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [selectedAIMentor, setSelectedAIMentor] = useState(null);
  const [showTaskBoard, setShowTaskBoard] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const [highlightTaskBoard, setHighlightTaskBoard] = useState(false);

  // Туториал
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showRobotMap, setShowRobotMap] = useState(false);
  const [showMentors, setShowMentors] = useState(false);
  const [showTaskButton, setShowTaskButton] = useState(false);
  const [autoDialogueOpen, setAutoDialogueOpen] = useState(false);
  const [robotDialogStep, setRobotDialogStep] = useState(null);
  const [robotPosition, setRobotPosition] = useState('center');
  const [showMentorSelection, setShowMentorSelection] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  // Сброс состояний туториала
  const resetTutorialState = () => {
    setTutorialStep(0);
    setShowRobotMap(false);
    setShowMentors(false);
    setShowTaskButton(false);
    setHighlightTaskBoard(false);
    setRobotDialogStep(null);
    setRobotPosition('center');
  };

  // Эффект для появления кнопки доски на шаге 1
  useEffect(() => {
    if (tutorialStep === 1) {
      setShowTaskButton(true);
      setHighlightTaskBoard(true);
      setTimeout(() => setHighlightTaskBoard(false), 3000);
    }
  }, [tutorialStep]);

  // Выбор существующего игрока
  const handleSelectPlayer = (name) => {
    const playerData = loadPlayerData(name);
    if (playerData) {
      setCurrentPlayer(playerData);
      setSkills(playerData.skills);
      
      const isTutorialCompleted = playerData.tutorialCompleted;
      
      setShowRobot(!isTutorialCompleted);
      setAutoDialogueOpen(!isTutorialCompleted);
      
      if (isTutorialCompleted) {
        setShowMentors(true);
        setShowTaskButton(true);
        setShowRobotMap(false);
        setTutorialStep(4);
      } else {
        resetTutorialState();
      }
      
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
      tutorialCompleted: false,
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
    setShowRobot(true);
    setAutoDialogueOpen(true);
    resetTutorialState();
    setStage('game');
  };

  // Обработка действий от робота
  const handleRobotAction = (action) => {
    console.log('handleRobotAction получил:', action);

    if (action === 'highlightTaskBoard') {
      setHighlightTaskBoard(true);
      setTimeout(() => setHighlightTaskBoard(false), 3000);
    }
    if (action === 'showRobotMap') {
      setShowRobotMap(true);
    }
    if (action === 'showTaskButton') {
      setShowTaskButton(true);
    }
    if (action === 'moveRobotToTaskBoard') {
      setRobotPosition('nearTaskBoard');
    }
    if (action === 'moveRobotToCenter') {
      setRobotPosition('center');
    }
    if (action === 'openMentorSelection') {
      setShowMentorSelection(true);
    }
  };

  // Завершение знакомства (вызывается из TasksBoard)
  const completeIntroduction = () => {
    const completedTasks = JSON.parse(localStorage.getItem(`completedTasks_${currentPlayer?.name}`) || '[]');
    const introTask = tasks.find(t => t.action === 'completeIntroduction');
    
    if (introTask && !completedTasks.includes(introTask.id)) {
      completedTasks.push(introTask.id);
      localStorage.setItem(`completedTasks_${currentPlayer?.name}`, JSON.stringify(completedTasks));
      
      // Начисляем по 5 очков в каждый навык
      const newSkills = {
        logic: skills.logic + 5,
        creativity: skills.creativity + 5,
        systems: skills.systems + 5,
        analytics: skills.analytics + 5,
        attention: skills.attention + 5
      };
      setSkills(newSkills);
      if (currentPlayer?.name) {
        saveSkills(currentPlayer.name, newSkills);
      }

      setShowTaskBoard(false);
      
      // Показываем диалог с роботом
      setRobotDialogStep('afterIntroduction');
      setSelectedCharacter('Робот');
    }
  };

  // Выбор ментора
  const handleMentorSelect = (mentor) => {
    setShowMentorSelection(false);
    setSelectedMentor(mentor);
    setRobotDialogStep('afterMentorChoice');
    setSelectedCharacter('Робот');
  };

  // Клик по роботу на карте
  const handleRobotMapClick = () => {
    setSelectedCharacter('Робот');
    setRobotDialogStep('afterClick');
    setTutorialStep(1);
    setShowTaskButton(true);
    setHighlightTaskBoard(true);
    setTimeout(() => setHighlightTaskBoard(false), 3000);
  };

  // Открытие доски задач
  const handleTaskBoardOpen = () => {
    setShowTaskBoard(true);
    if (tutorialStep === 1) {
      setTutorialStep(2);
    }
  };

  // Закрытие доски задач
  const handleTaskBoardClose = () => {
    setShowTaskBoard(false);
    if (tutorialStep === 2) {
      setTutorialStep(3);
      setShowMentors(true);
      setShowTaskButton(true);
      setSelectedCharacter('Робот');
      setRobotDialogStep('goodbye');
    }
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
        onClose={handleTaskBoardClose}
        skills={skills}
        setSkills={setSkills}
        playerName={currentPlayer?.name}
        onCompleteIntroduction={completeIntroduction}
      />
    );
  }

  // Выбор ментора
  if (showMentorSelection) {
    return <MentorSelection onSelect={handleMentorSelect} onClose={() => setShowMentorSelection(false)} />;
  }

  // Диалог с персонажем (менторы или робот)
  if (selectedCharacter) {
    // Для обычных менторов
    if (selectedCharacter !== 'Робот') {
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
          playerName={currentPlayer?.name}
        />
      );
    }
    
    // Для робота — используем startStep
    return (
      <Dialogue
        characterName="Робот"
        startStep={robotDialogStep || 'tutorialStart'}
        onClose={() => {
          setSelectedCharacter(null);
          setRobotDialogStep(null);
          if (tutorialStep === 3) {
            setShowRobotMap(false);
            setTutorialStep(4);
            const updatedPlayer = { ...currentPlayer, tutorialCompleted: true };
            setCurrentPlayer(updatedPlayer);
            savePlayerData(updatedPlayer);
          }
        }}
        onSkillGain={() => {}}
        playerName={currentPlayer?.name}
        onAction={handleRobotAction}
      />
    );
  }

  // Автоматический туториал (первый диалог)
  if (autoDialogueOpen && currentPlayer && !currentPlayer.tutorialCompleted) {
    return (
      <Dialogue
        characterName="Робот"
        startStep="tutorialStart"
        onClose={() => {
          setAutoDialogueOpen(false);
          setShowRobotMap(true);
        }}
        onSkillGain={() => {}}
        playerName={currentPlayer?.name}
        onAction={handleRobotAction}
      />
    );
  }

  // Финальный отчёт
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

  // Выбор/создание игрока
  if (stage === 'select') {
    return <PlayerSelect onSelectPlayer={handleSelectPlayer} onCreateNew={handleCreateNew} />;
  }

  if (stage === 'nameInput') {
    return <NameInput onSave={handleSaveName} />;
  }

  // Основная игра
return (
  <div>
    <div className="world-container">
      <div className="map-container">
        <div className="characters-container">
          {showMentors && (
            <>
              <Character name="Егор" role="Backend" onSelect={handleCharacterClick} />
              <Character name="Маша" role="Frontend" onSelect={handleCharacterClick} />
              <Character name="Андрей" role="DevOps" onSelect={handleCharacterClick} />
              <Character name="Вова" role="Data Science" onSelect={handleCharacterClick} />
              <Character name="Дмитрий" role="QA" onSelect={handleCharacterClick} />
            </>
          )}
          
          {showRobotMap && (
            <div className="robot-office" onClick={handleRobotMapClick}>
              <img src="/sprites/робот.png" alt="Робот" className="robot-sprite-office" />
            </div>
          )}
        </div>
        
        <button 
          className={`task-board-button ${highlightTaskBoard ? 'highlight' : ''}`}
          onClick={handleTaskBoardOpen}
        />
      </div>
    </div>

    <div className="buttons-container">
      <button onClick={() => setShowReport(true)}>Завершить игру</button>
  
  <button onClick={() => {
    setStage('select');
    setSelectedCharacter(null);
    setShowReport(false);
    setShowAIChat(false);
    setShowTaskBoard(false);
    resetTutorialState();
  }}>🚪 Выйти из аккаунта</button>
    </div>
  </div>
);
}

export default App;