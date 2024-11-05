import { Question } from './types'
export interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
  pickAnswer: (id: number, index: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}