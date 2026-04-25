import { getTopProfession, getTotalPoints } from "./gameLogic.js";

export const generateReport = (skills) => {
  const totalPoints = getTotalPoints(skills);
  let percentages = {};

  for (let [key, val] of Object.entries(skills)) {
    let roundedPercantage = Math.round((val / totalPoints) * 100);
    percentages[key] = roundedPercantage;
  }

  return {
    finalProfession: getTopProfession(skills),
    finalTotalPoints: getTotalPoints(skills),
  };
};
