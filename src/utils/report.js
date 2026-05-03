import { getTopProfession, getTotalPoints } from "./gameLogic.js";

export const generateReport = (skills) => {
  const totalPoints = getTotalPoints(skills);
  let percentages = {};

  if (totalPoints === 0) {
    for (let key of Object.keys(skills)) {
      percentages[key] = 0;
    }
  } else {
    for (let [key, val] of Object.entries(skills)) {
      percentages[key] = Math.round((val / totalPoints) * 100);
    }
  }

  const bestProfession = getTopProfession(skills);
  const recommendationsGuide = {
    Backend: "Тебе в backend",
    Frontend: "Тебе в frontend",
    DevOps: "Тебе в DevOps",
    "Data Science": "Тебе в data science",
    QA: "Тебе в QA",
  };

  const recommendations = recommendationsGuide[bestProfession];

  return {
    finalTopProfession: getTopProfession(skills),
    finalTotalPoints: totalPoints,
    finalPercentages: percentages,
    finalRecommendations: recommendations,
  };
};
