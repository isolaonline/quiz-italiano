export type Difficulty = "Facile" | "Medio" | "Difficile";

export type Category = "Grammatica" | "Vocabolario" | "Sintassi" | "Figure Retoriche" | "Cultura e Modi di dire";

export type GameState = 'start' | 'playing' | 'finished';

export interface QuestionTemplate {
  q: string;
  c: string;
  w1: string;
  w2: string;
  expl: string;
  category: Category;
  difficulty: Difficulty;
}

export interface GameQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: Category;
  difficulty: Difficulty;
}
