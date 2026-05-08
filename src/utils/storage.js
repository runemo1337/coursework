export const saveSkills = (skills) => {
  const skillsString = JSON.stringify(skills);
  localStorage.setItem("game_skills", skillsString);
};

const defaultSkills = {
  logic: 0,
  creativity: 0,
  systems: 0,
  analytics: 0,
  attention: 0,
};

export const loadSkills = () => {
  const savedSkills = localStorage.getItem("game_skills");
  
  if (savedSkills === null) {
    return defaultSkills;
  }
  
  return JSON.parse(savedSkills);
};

export const clearSkills = () => {
  localStorage.removeItem("game_skills");
};