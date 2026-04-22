import { useState } from 'react';
import Character from './components/Characters';
import './App.css';
import Dialogue from './components/Dialogue';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  if (selectedCharacter) {
    return (
      <Dialogue
        characterName = {selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        />
    );
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
    </div>
  );
}

export default App;