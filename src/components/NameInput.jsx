import { useState } from 'react';
import { getSavedPlayers } from '../utils/saveSystem';

function NameInput({ onSave }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError('Введите имя');
      return;
    }
    
    // Проверяем, существует ли уже такой игрок
    const existingPlayers = getSavedPlayers();
    if (existingPlayers.includes(trimmedName)) {
      setError('Игрок с таким именем уже существует');
      return;
    }
    
    setError('');
    onSave(trimmedName);
  };

  return (
    <div className="name-input-overlay">
      <div className="name-input-window">
        <h1>🎮 Добро пожаловать!</h1>
        <p>Как тебя зовут?</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(''); // очищаем ошибку при вводе
            }}
            placeholder="Введите имя..."
            autoFocus
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Начать стажировку</button>
        </form>
      </div>
    </div>
  );
}

export default NameInput;