export const tasks = [
  // ========== ТЕМА: ЗНАКОМСТВО С КОМАНДОЙ ==========
  {
    id: 1,
    theme: "🌟 Знакомство с командой",
    title: "Познакомься с Егором",
    description: "Поговори с Егором и узнай о его работе в бэкенде",
    skill: null,
    points: 0,
    mentorRequired: "Егор",
    action: "startDialogue",
    done: false
  },
  {
    id: 2,
    theme: "🌟 Знакомство с командой",
    title: "Познакомься с Машей",
    description: "Поговори с Машей и узнай о её работе во фронтенде",
    skill: null,
    points: 0,
    mentorRequired: "Маша",
    action: "startDialogue",
    done: false
  },
  {
    id: 3,
    theme: "🌟 Знакомство с командой",
    title: "Познакомься с Андреем",
    description: "Поговори с Андреем и узнай о его работе в DevOps",
    skill: null,
    points: 0,
    mentorRequired: "Андрей",
    action: "startDialogue",
    done: false
  },
  {
    id: 4,
    theme: "🌟 Знакомство с командой",
    title: "Познакомься с Вовой",
    description: "Поговори с Вовой и узнай о его работе в Data Science",
    skill: null,
    points: 0,
    mentorRequired: "Вова",
    action: "startDialogue",
    done: false
  },
  {
    id: 5,
    theme: "🌟 Знакомство с командой",
    title: "Познакомься с Дмитрием",
    description: "Поговори с Дмитрием и узнай о его работе в QA",
    skill: null,
    points: 0,
    mentorRequired: "Дмитрий",
    action: "startDialogue",
    done: false
  },
  {
  id: 100,
  theme: "🌟 Знакомство с командой",
  title: "Завершить знакомство",
  description: "Ты познакомился со всеми менторами. Пора подвести итоги и выбрать наставника.",
  skill: null,
  points: 5,
  action: "completeIntroduction",
  done: false,
  requiresAllMentors: true,
  // После выполнения даём по 5 очков в каждый навык
  rewardAllSkills: true
},
];