import './Report.css';

function Report({ skills, onRestart }) {

    const skillMap = {
        logic: { name: '🧠 Логика', profession: 'Backend' },
        creativity: { name: '🎨 Креативность', profession: 'Frontend' },
        systems: { name: '⚙️ Системность', profession: 'DevOps' },
        analytics: { name: '📈 Аналитика', profession: 'Data Science' },
        attention: { name: '🔍 Внимательность', profession: 'QA' }
    };

    const sortedSkills = Object.entries(skills)
        .map(([key, points]) => ({key, points, ...skillMap[key]}))
        .sort((a,b) => b.points - a.points);

    const top3 = sortedSkills.slice(0,3);

    return (
        <div className = "report-overlay">
            <div className = "report-window">
            <h1>🎓 ТВОЙ IT-профиль</h1>

            <h2>🏆 ТОП НАПРАВЛЕНИЙ</h2>
            {top3.map((item,index) => (
                <div key={item.key} className = "top-item">
                    <span className="top-number">{index + 1}.</span>
                    <span className="top-name">{item.profession}</span>
                    <span className="top-points">{item.points} очков</span>
                </div>
            ))}

            <h2>📊 ТАБЛИЦА НАВЫКОВ</h2>
            {sortedSkills.map((item) => (
                <div key={item.key} className = "skill-row">
                    <span className = "skill-name">{item.name}</span>
                    <span className = "skill-points">{item.points}</span>
                </div>
            ))}

            <button className = "report-window button" onClick={onRestart}>
                Начать заново
            </button>

                    </div>
                </div>
            
    );
}

export default Report;