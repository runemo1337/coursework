import { useState } from 'react';
import Character from './components/Characters';
import './App.css';
import Dialogue from './components/Dialogue';
import Report from './components/Report';
import { addSkillPoints } from './utils/gameLogic';
import { clearSkills, loadSkills, saveSkills } from './utils/storage';
import AIChat from './components/AIChat';
import TasksBoard from './components/TasksBoard';
import { characterPrompts } from './data/characterPrompts';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [skills, setSkills] = useState(() => loadSkills());

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  const [showReport, setShowReport] = useState(false);

  const [showAIChat, setShowAIChat] = useState(false);
  const [selectedAIMentor, setSelectedAIMentor] = useState(null);
  const [showTaskBoard, setShowTaskBoard] = useState(false);

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
          saveSkills(newSkills);
        }}
      />
    );
  }

  if (showReport) {
    return (
      <Report
        skills={skills}
        onRestart={() => {
          clearSkills();
          localStorage.removeItem('completedTasks');
          setSkills({
            logic: 0,
            creativity: 0,
            systems: 0,
            analytics: 0,
            attention: 0,
          });
          setShowReport(false);
        }}
      />
    );
  }

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
        
        <button onClick={() => setShowTaskBoard(true)}>📋 Доска заданий</button>
      </div>
    </div>
  );
}

export default App;