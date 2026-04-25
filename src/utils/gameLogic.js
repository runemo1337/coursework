export const addSkillPoints = (
  skills,
  skill,
  points,
  secondarySkill = null,
  secondaryPoints = 0,
) => {
  const updateSkills = { ...skills };

  updateSkills[skill] = updateSkills[skill] + points;

  if (secondarySkill && secondaryPoints) {
    updateSkills[secondarySkill] =
      updateSkills[secondarySkill] + secondaryPoints;
  }

  return updateSkills;
};

export const getTotalPoints = (skills) => {
  const skillsVal = Object.values(skills);
  const totalSum = skillsVal.reduce((sum, cur) => sum + cur, 0);

  return totalSum;
};

const skillToProfession = {
  logic: "Backend",
  creativity: "Frontend",
  systems: "DevOps",
  analytics: "Data Science",
  attention: "QA",
};

export const getTopProfession = (skills) => {
  const skillsKey = Object.entries(skills);
  let maxPoints = 0;
  let bestSkill = null;

  for (let points of skillsKey) {
    if (points[1] > maxPoints) {
      maxPoints = points[1];
      bestSkill = points[0];
    }
  }

  return skillToProfession[bestSkill];
};
