import { useState } from 'react';
import './MentorSelection.css';

const MentorSelection = ({ onSelect, onClose }) => {
  const [hoveredMentor, setHoveredMentor] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const mentors = [
    { 
      id: 'Егор', 
      name: 'Егор', 
      role: 'Backend', 
      color: '#2ecc71', 
      topics: ['Базы данных', 'API', 'Серверная логика', 'Python/Java']
    },
    { 
      id: 'Маша', 
      name: 'Маша', 
      role: 'Frontend', 
      color: '#1abc9c', 
      topics: ['HTML/CSS', 'JavaScript', 'React', 'Адаптивный дизайн']
    },
    { 
      id: 'Андрей', 
      name: 'Андрей', 
      role: 'DevOps', 
      color: '#8e44ad', 
      topics: ['Docker', 'Linux', 'CI/CD', 'Облачные технологии']
    },
    { 
      id: 'Вова', 
      name: 'Вова', 
      role: 'Data Science', 
      color: '#3498db', 
      topics: ['Python', 'Нейронные сети', 'Анализ данных', 'SQL']
    },
    { 
      id: 'Дмитрий', 
      name: 'Дмитрий', 
      role: 'QA', 
      color: '#e67e22', 
      topics: ['Тест-кейсы', 'Баг-репорты', 'Автотесты', 'Jira']
    }
  ];

  const reactions = {
    'Егор': 'Хороший выбор для первого раза, Егор сможет тебя научить основам backend\'а',
    'Маша': 'Креативно! Маша — мастер в искусстве работы с интерфейсами, с ней ты освоишь базу Frontend',
    'Андрей': 'Рисковый выбор, DevOps — это очень сложно для новичков, но если ты хочешь попробовать, то дерзай',
    'Вова': 'Хочешь углубиться в нейронки? Тогда это самый лучший выбор',
    'Дмитрий': 'Прагматичный выбор, Дмитрий хорош в отлове багов и тестировании, с ним ты быстро освоишь QA'
  };

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    onSelect(selectedMentor);
  };

  return (
    <div className="mentor-selection-overlay">
      <div className="mentor-selection-container">
        <h2>Выбери наставника для стажировки</h2>
        <div className="mentors-grid">
          {mentors.map(mentor => (
            <div
              key={mentor.id}
              className={`mentor-card ${hoveredMentor === mentor.id ? 'hovered' : ''}`}
              style={{ 
                backgroundColor: hoveredMentor === mentor.id ? `rgba(${parseInt(mentor.color.slice(1,3), 16)}, ${parseInt(mentor.color.slice(3,5), 16)}, ${parseInt(mentor.color.slice(5,7), 16)}, 0.2)` : 'transparent'
              }}
              onMouseEnter={() => setHoveredMentor(mentor.id)}
              onMouseLeave={() => setHoveredMentor(null)}
              onClick={() => handleMentorClick(mentor)}
            >
              <img src={`/sprites/${mentor.name.toLowerCase()}.png`} alt={mentor.name} className="mentor-sprite" />
              <div className="mentor-name">{mentor.name}</div>
              <div className="mentor-role">{mentor.role}</div>
              {hoveredMentor === mentor.id && (
                <div className="mentor-topics">
                  <div className="topics-title">Темы:</div>
                  <div className="topics-list">
                    {mentor.topics.map(topic => <span key={topic} className="topic-tag">{topic}</span>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showConfirm && selectedMentor && (
        <div className="confirm-overlay" onClick={() => setShowConfirm(false)}>
          <div className="confirm-window" onClick={(e) => e.stopPropagation()}>
            <h3>Ты уверен?</h3>
            <p>{reactions[selectedMentor.name]}</p>
            <div className="confirm-buttons">
              <button className="confirm-btn" onClick={handleConfirm}>Да, выбираю</button>
              <button className="cancel-btn" onClick={() => setShowConfirm(false)}>Подумаю ещё</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorSelection;