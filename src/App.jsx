import { useState } from 'react';
import Character from './components/Characters';
import './App.css';
import Dialogue from './components/Dialogue';
import Report from './components/Report';
import { addSkillPoints } from './utils/gameLogic';
import { clearSkills, loadSkills, saveSkills } from './utils/storage';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [skills, setSkills] = useState(() => loadSkills());

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  const [showReport, setShowReport] = useState(false);

  if (selectedCharacter) {
    return (
      <Dialogue
        characterName = {selectedCharacter}
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
    return <Report skills={skills} onRestart={() => {
      clearSkills();
      setSkills({ logic:0, creativity:0, systems:0, analytics:0, attention:0});
      setShowReport(false);
    }} />;
  }

  return (
    <div>
      <h1>IT-офис</h1>
      <div className="characters-grid">
        <Character name="Егор" role="Backend" onSelect={handleCharacterClick} />
        <Character name="Маша" role="Frontend" onSelect={handleCharacterClick} />
        <Character name="Андрей" role="DevOps" onSelect={handleCharacterClick} />
        <Character name="Вова" role="Data Science" onSelect={handleCharacterClick} />
        <Character name="Дмитрий" role="QA" onSelect={handleCharacterClick} />
      </div>
      <button onClick={() => setShowReport(true)}>Завершить игру</button>
    </div>
  );
}

export default App;