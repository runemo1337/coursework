export const addSkillPoints = (
  skills,
  skill,
  points,
  secondarySkill = null,
  secondaryPoints = 0,
) => {
  const updatedSkills = { ...skills };

  updatedSkills[skill] = updatedSkills[skill] + points;

  if (secondarySkill && secondaryPoints) {
    updatedSkills[secondarySkill] =
      updatedSkills[secondarySkill] + secondaryPoints;
  }

  return updatedSkills;
};

export const getTotalPoints = (skills) => {
  const skillsValues = Object.values(skills);
  const totalSum = skillsValues.reduce((sum, current) => sum + current, 0);

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
  const skillsEntries = Object.entries(skills);
  let maxPoints = 0;
  let bestSkill = null;

  for (let [skill, points] of skillsEntries) {
    if (points > maxPoints) {
      maxPoints = points;
      bestSkill = skill;
    }
  }

  return skillToProfession[bestSkill];
};