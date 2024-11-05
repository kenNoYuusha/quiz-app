interface Answers {
  text: string;
  color: string;
}

export interface Question {
  id: number;
  question: string;
  code: string;
  answers: Answers[];
  correctAnswer: number;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}