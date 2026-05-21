import { getTopProfession, getTotalPoints } from "./gameLogic.js";

export const getSkillLevel = (points) => {
  if (points <= 15) return { name: 'Начинающий', color: '#9ca3af'};
  if (points <= 42) return { name: 'Начинающий', color: '#6b7280'};
  if (points <= 85) return { name: 'Junior', color: '#3b82f6'};
  if (points <= 139) return { name: 'Junior', color: '#2563eb' };
  if (points <= 208) return { name: 'Middle', color: '#10b981' };
  if (points <= 293) return { name: 'Middle', color: '#059669' };
  if (points <= 395) return { name: 'Senior', color: '#f59e0b' };
  if (points <= 515) return { name: 'Senior', color: '#d97706' };
  if (points <= 654) return { name: 'Lead', color: '#8b5cf6' };
  return { name: 'Эксперт', color: '#ec4899' };
}

export const generateReport = (skills) => {
  const totalPoints = getTotalPoints(skills);
  let percentages = {};
  let skillWithLevels = {};

  if (totalPoints === 0) {
    for (let key of Object.keys(skills)) {
      percentages[key] = 0;
    }
  } else {
    for (let [key, value] of Object.entries(skills)) {
      percentages[key] = Math.round((value / totalPoints) * 100);
    }
  }

  const skillNames = {
    logic: '🧠 Логика',
    creativity: '🎨 Креативность',
    systems: '⚙️ Системность',
    analytics: '📈 Аналитика',
    attention: '🔍 Внимание'
  }

  let skillsArray = Object.entries(skills).map(([key, points]) => {
    const percentage = totalPoints === 0 ? 0: Math.round((points / totalPoints) * 100 );
    return {
      id: key,
      name: skillNames[key],
      points: points,
      percentage: percentage,
      level: getSkillLevel(points)
    };
  }
  );

  skillsArray.sort((a, b) => b.points - a.points);


  const bestProfession = getTopProfession(skills);

  const recommendationsGuide = {
    Backend: {
      text: 'У тебя отлично развито логическое мышление. Backend-разработка — это создание серверной логики, баз данных и API.',
      courses: 'Начни с Python или Java, изучи SQL и основы алгоритмов.'
    },
    Frontend: {
      text: 'Ты проявляешь креативность и внимание к деталям. Frontend-разработка — это создание интерфейсов, которые видят пользователи.',
      courses: 'Изучи HTML, CSS и JavaScript. Дальше — React или Vue.'
    },
    DevOps: {
      text: 'Ты хорошо мыслишь системами. DevOps — это автоматизация развёртывания, настройка серверов и CI/CD.',
      courses: 'Изучи Linux, Docker, Git и CI/CD (GitHub Actions).'
    },
    "Data Science": {
      text: 'Ты склонен к аналитике и работе с данными. Data Science — это анализ данных, построение моделей и нейросетей.',
      courses: 'Изучи Python (Pandas, NumPy), основы статистики и машинного обучения.'
    },
    QA: {
      text: 'Ты внимателен к деталям. QA — это поиск багов, тестирование и контроль качества продуктов.',
      courses: 'Изучи теорию тестирования, Jira, Postman и основы SQL.'
    }
  };

const recommendation = recommendationsGuide[bestProfession] || {
  text: 'Познакомься с разными направлениями IT поближе.',
  courses: 'Попробуй пройти задачи по каждому направлению.'
};

  return {
    bestProfession: bestProfession,
    totalPoints: totalPoints,
    percentages: percentages,
    recommendationText: recommendation.text,
    recommendationsCourses: recommendation.courses,
    skillsArray: skillsArray,
    top3: skillsArray.slice(0, 3),
  };
};
