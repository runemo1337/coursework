import Character from "./components/Characters";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characterName);
  };

  if (selectedCharacter) {
    return (
      <div>
        <h1>Диалог с {selectedCharacter}</h1>
        <button onClick={() => setSelectedCharacter(null)}>Назад в офис</button>
      </div>
    );
  }

  return (
    <div>
      <h1>IT-офис</h1>
      <div className="characters-grid">
        <Character name="Егор" role="Backend" onSelect={handleCharacterClick} />
        <Character
          name="Лена"
          role="Frontend"
          onSelect={handleCharacterClick}
        />
        <Character
          name="Андрей"
          role="DevOps"
          onSelect={handleCharacterClick}
        />
        <Character
          name="Вова"
          role="Data science"
          onSelect={handleCharacterClick}
        />
        <Character
          name="Матвей"
          role="Analytics"
          onSelect={handleCharacterClick}
        />
      </div>
    </div>
  );
}

export default App;