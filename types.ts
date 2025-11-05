import type { ReactElement } from 'react';

export type Category = "Grammatica" | "Vocabolario" | "Sintassi" | "Figure Retoriche";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: Category;
}

export interface Evaluation {
  title: string;
  message: string;
  icon: ReactElement;
}