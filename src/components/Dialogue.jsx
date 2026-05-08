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
            <div className="dialogue-text">
        <p>Диалог с {characterName}</p>
        <p>Текущий шаг: {currentStep}</p>
        <p>{characterName}: {text}</p>
        <div className="dialogue-option">
        {options.map((option,index) => (
            <button key={index} className="dialogue-button" onClick={() => handleStepChange(option.nextStep, option)}>
                {option.text}
            </button>
        ))}
        <button className="dialogue-button dialogue-button-close" onClick={onClose}>Закрыть</button>
        </div>
            </div>
        </div>
    </div>
);
}

export default Dialogue;