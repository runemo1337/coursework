export const saveSkills = (skills) => {
  const strSkills = JSON.stringify(skills);
  localStorage.setItem("skillsData", strSkills);
};

const defaultSkills = {
  logic: 0,
  creativity: 0,
  systems: 0,
  analytics: 0,
  attention: 0,
};

export const loadSkills = () => {
  const loadedSkills = localStorage.getItem("skillsData");
  if (loadedSkills === null) {
    return defaultSkills;
  } else {
    return JSON.parse(loadedSkills);
  }
};

export const clearSkills = () => {
  localStorage.removeItem("skillsData");
};
