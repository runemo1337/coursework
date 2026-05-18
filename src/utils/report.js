import { getTopProfession, getTotalPoints } from "./gameLogic.js";

export const generateReport = (skills) => {
  const totalPoints = getTotalPoints(skills);
  let percentages = {};

  if (totalPoints === 0) {
    for (let key of Object.keys(skills)) {
      percentages[key] = 0;
    }
  } else {
    for (let [key, value] of Object.entries(skills)) {
      percentages[key] = Math.round((value / totalPoints) * 100);
    }
  }

  const bestProfession = getTopProfession(skills);
  const recommendationsGuide = {
    Backend: "Изучи Python или Java, разберись с базами данных и API.",
    Frontend: "Изучи HTML, CSS и JavaScript. Попробуй React.",
    DevOps: "Изучи Linux, Docker, CI/CD (GitHub Actions).",
    "Data Science": "Изучи Python, Pandas, Matplotlib. Попробуй Jupyter Notebook.",
    QA: "Изучи теорию тестирования, попробуй Jira и Postman.",
  };

  const recommendations = recommendationsGuide[bestProfession] || "Познакомься с разными направлениями IT поближе.";

  return {
    bestProfession: bestProfession,
    totalPoints: totalPoints,
    percentages: percentages,
    recommendations: recommendations,
  };
};
