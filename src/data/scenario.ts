import type { QuestStep } from "../types/game";

export const scenario: QuestStep[] = [
  {
    id: 1,
    title: "entrance",
    description: "you are at the entrance",
    answers: [
      {
        text: "var 1",
        goToId: 2,
      },
    ],
    difficulty: "easy",
    reward: ["logic", 10],
  },
  {
    id: 2,
    title: "var 2",
    description: "you are at the entrance",
    answers: [
      {
        text: "var 2",
        goToId: 3,
      },
    ],
    difficulty: "easy",
    reward: ["logic", 10],
  },
];
