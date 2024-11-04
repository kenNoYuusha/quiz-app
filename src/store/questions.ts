import { create } from 'zustand'
import { type Question } from '../types/types'
import { type State } from '../types/typesStateQuestions'
import datajson from '../data.json'

export const useQuestionsStore = create<State>((set, get) => ({
  questions: [],

  currentQuestion: 0,

  fetchQuestions: (limit: number) => {
    //const res = await fetch('http://localhost:5173/data.json')
    //const json = await res.json()
    const questions = datajson.sort(() => Math.random() - 0.5).slice(0, limit)
    set({questions})
  },

  pickAnswer: (id: number, index: number) => {
    console.log('ejecutando pickAnswer')
    const { questions } = get()
    const newQuestions:Question[] = JSON.parse(JSON.stringify(questions))
    const indexQuestion = newQuestions.findIndex(q => q.id === id)
    const infoQuestion = newQuestions[indexQuestion]
    infoQuestion['userSelectedAnswer'] = index
    infoQuestion['isCorrectUserAnswer'] = infoQuestion.correctAnswer === index
    newQuestions[indexQuestion] = infoQuestion
    set({questions: newQuestions})
  },

  goNextQuestion: () => {
    const { currentQuestion, questions} = get()
    const nextQuestion = currentQuestion + 1
    console.log('ejecutando nexquestion')
    if(nextQuestion < questions.length) {
      set({ currentQuestion: nextQuestion})
    }
  },

  goPreviousQuestion: () => {
    const { currentQuestion } = get()
    const previousQuestion = currentQuestion - 1
    console.log('ejecutando previous question')
    if (previousQuestion >= 0) {
      set({ currentQuestion: previousQuestion})
    }
  },
}))