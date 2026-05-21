import { useState, useEffect } from 'react';
import { getSavedPlayers, loadPlayerData, deletePlayerData } from '../utils/saveSystem';
import './PlayerSelect.css';

function PlayerSelect({ onSelectPlayer, onCreateNew }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(getSavedPlayers());
  }, []);

  const handleDelete = (name) => {
    if (window.confirm(`Удалить сохранение для "${name}"?`)) {
      deletePlayerData(name);
      setPlayers(getSavedPlayers());
    }
  };

  return (
    <div className="player-select-overlay">
      <div className="player-select-window">
        <h1>🎮 Выбор стажёра</h1>
        
        {players.length === 0 ? (
          <p className="no-players">Нет сохранений. Создайте нового стажёра!</p>
        ) : (
          <div className="players-list">
            {players.map(name => (
              <div key={name} className="player-item">
                <button 
                  className="player-name-btn" 
                  onClick={() => onSelectPlayer(name)}
                >
                  {name}
                </button>
                <button 
                  className="player-delete-btn" 
                  onClick={() => handleDelete(name)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
        
        <button className="create-new-btn" onClick={onCreateNew}>
          + Новый стажёр
        </button>
      </div>
    </div>
  );
}

export default PlayerSelect;