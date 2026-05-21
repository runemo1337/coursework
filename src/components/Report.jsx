import './Report.css';
import { generateReport } from '../utils/report';

function Report({ skills, onRestart }) {
  const report = generateReport(skills);
  
  // Профессии для отображения
  const professionMap = {
    logic: 'Backend',
    creativity: 'Frontend',
    systems: 'DevOps',
    analytics: 'Data Science',
    attention: 'QA'
  };
  
  return (
    <div className="report-overlay">
      <div className="report-window">
        <h1>🎓 ТВОЙ IT-ПРОФИЛЬ</h1>
        
        {/* Топ-3 направления */}
        <h2>🏆 ТОП НАПРАВЛЕНИЙ</h2>
        {report.top3.map((item, index) => (
          <div key={item.id} className="top-item">
            <span className="top-number">{index + 1}.</span>
            <span className="top-name">{professionMap[item.id]}</span>
            <span className="top-points">{item.points} очков</span>
          </div>
        ))}
        
        {/* Таблица навыков */}
        <h2>📊 ТАБЛИЦА НАВЫКОВ</h2>
        {report.skillsArray.map((item) => (
          <div key={item.id} className="skill-row">
            <span className="skill-name">{item.name}</span>
            <div className="skill-bar-container">
              <div 
                className="skill-bar-fill" 
                style={{ width: `${item.percentage}%`, backgroundColor: '#3b82f6' }}
              />
            </div>
            <span className="skill-points">{item.points}</span>
            <span className="skill-level">{item.level.name}</span>
          </div>
        ))}
        
        {/* Рекомендации */}
        <h2>💡 РЕКОМЕНДАЦИИ</h2>
        <div className="recommendation-block">
          <p className="recommendation-text">{report.recommendationText}</p>
          <p className="recommendation-courses"><strong>Что учить:</strong> {report.recommendationsCourses}</p>
        </div>
        
        <button className="restart-button" onClick={onRestart}>
          Начать заново
        </button>
      </div>
    </div>
  );
}

export default Report;