export interface Answer {
  text: string;
  goToId: number;
}

export interface QuestStep {
  id: number;
  title: string;
  description: string;
  answers: Answer[];
  difficulty: 'easy' | 'medium' | 'hard';
  picture?: string;
  reward: [string, number];
  isGameOver?: boolean;
}
