import { useState } from 'react';
import { dialogues } from '../data/dialogues';
import '../App.css';

function Dialogue({ characterName, onClose, onSkillGain }) {
    const [currentStep, setCurrentStep] = useState('start');
    
    const handleStepChange = (nextStep, option = {}) => {

        if (option.skill && option.points) {
            onSkillGain(option.skill, option.points, option.secondarySkill, option.secondaryPoints);
        }

        if (nextStep === 'close') {
            onClose();
        } 
        else {
            setCurrentStep(nextStep);
        }
    };

    
    const stepData = dialogues[characterName][currentStep];

    const text = stepData.text;
    const options = stepData.options;


return (
  <div className="dialogue-overlay">
    <div className="dialogue-window">
      
      {/* Текст ментора */}
      {stepData.text && (
        <div className="dialogue-text">
          <img className="portrait" src={`/sprites/${characterName.toLowerCase()}_portrait.png`} />
          <div className="dialogue-message">
            <strong>{characterName}:</strong> {stepData.text}
          </div>
        </div>
      )}

      {/* Текст игрока (если есть) */}
      {stepData.playerText && (
        <div className="dialogue-text player-text">
          <div className="dialogue-message">
            <strong>Игрок:</strong> {stepData.playerText}
          </div>
        </div>
      )}
      
      {/* Кнопки (если есть) */}
      {stepData.options && stepData.options.length > 0 && (
        <div className="dialogue-option">
          {stepData.options.map((option, index) => (
            <button key={index} className="dialogue-button" onClick={() => handleStepChange(option.nextStep, option)}>
              {option.text}
            </button>
          ))}
          
        </div>
      )}

      {stepData.showNextButton && (
        <div className="dialogue-next-container">
          <button className="dialogue-next-button" onClick={() => handleStepChange(stepData.nextStep)}>
            {stepData.nextButtonText || ">"}
          </button>
        </div>
      )}

      <button className="dialogue-button dialogue-button-close" onClick={onClose}>Закрыть</button>
      
    </div>
  </div>
);
}

export default Dialogue;