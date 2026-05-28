import { useState } from 'react';
import { dialogues } from '../data/dialogues';
import '../App.css';

function Dialogue({ characterName, onClose, onSkillGain, playerName, onAction, noOverlay, startStep }) {
    const [currentStep, setCurrentStep] = useState(startStep || 'start');
    
    const handleStepChange = (nextStep, option = {}) => {
        console.log('handleStepChange option:', option);

        if (option.skill && option.points) {
            onSkillGain(option.skill, option.points, option.secondarySkill, option.secondaryPoints);
        }
        
        if (option.action && onAction) {
            console.log('Вызываем onAction с:', option.action);
            onAction(option.action);
        }
        
        if (nextStep === 'close') {
            onClose();
        } else {
            setCurrentStep(nextStep);
        }
    };
    
    const stepData = dialogues[characterName][currentStep];
    
    // Если диалог не найден
    if (!stepData) {
        console.error(`Диалог не найден: ${characterName}, шаг: ${currentStep}`);
        return (
            <div className="dialogue-overlay">
                <div className="dialogue-window">
                    <p>Ошибка: диалог не найден</p>
                    <button onClick={onClose}>Закрыть</button>
                </div>
            </div>
        );
    }
    
    let displayText = stepData.text;
    let displayPlayerText = stepData.playerText;
    
    if (playerName) {
        if (displayText) {
            displayText = displayText.replace(/\[Имя\]/g, playerName);
        }
        if (displayPlayerText) {
            displayPlayerText = displayPlayerText.replace(/\[Имя\]/g, playerName);
        }
    }
    
    const options = stepData.options;

    return (
        <div className={noOverlay ? "dialogue-wrapper" : "dialogue-overlay"}>
            <div className="dialogue-window">
                {displayText && (
                    <div className="dialogue-text">
                        <img 
                            className="portrait" 
                            src={`/sprites/${characterName.toLowerCase()}_portrait.png`} 
                            alt={characterName}
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                        <div className="dialogue-message">
                            <strong>{characterName}:</strong> {displayText}
                        </div>
                    </div>
                )}
                
                {displayPlayerText && (
                    <div className="dialogue-text player-text">
                        <div className="dialogue-message">
                            <strong>Игрок:</strong> {displayPlayerText}
                        </div>
                    </div>
                )}
                
                {options && options.length > 0 && (
                    <div className="dialogue-option">
                        {options.map((option, index) => (
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