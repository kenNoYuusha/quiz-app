import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type State } from '../types/typesStateQuestions'
import datajson from '../data/modified_data.json'
import confetti from 'canvas-confetti'

export const useQuestionsStore = create<State>()(persist((set, get) => ({
  questions: [],

  currentQuestion: 0,

  fetchQuestions: (limit: number) => {
    //const res = await fetch('http://localhost:5173/data.json')
    //const json = await res.json()
    const questions = datajson.sort(() => Math.random() - 0.5).slice(0, limit)
    set({questions})
  },

  pickAnswer: (id: number, index: number) => {
    
    const { questions } = get()

    const newQuestions = questions.map(question => {
      if (question.id === id) {

        const isCorrectUserAnswer = question.correctAnswer === index
        if(isCorrectUserAnswer) confetti()

        const newAnswers = question.answers.map((answer, indexAnswer) => {
          if(indexAnswer === question.correctAnswer) {
            return {
              ...answer,
              color: 'green'
            }
          } else if (indexAnswer === index && indexAnswer !== question.correctAnswer) {
            return {
              ...answer,
              color: 'red'
            }
          } else {
            return answer
          }

        })
        
        return {
          ...question,
          userSelectedAnswer: index,
          isCorrectUserAnswer,
          answers: newAnswers
        }
      }
      return question
    })

    set({questions: newQuestions})
  },

  goNextQuestion: () => {
    const { currentQuestion, questions} = get()
    const nextQuestion = currentQuestion + 1
   
    if(nextQuestion < questions.length) {
      set({ currentQuestion: nextQuestion})
    }
  },

  goPreviousQuestion: () => {
    const { currentQuestion } = get()
    const previousQuestion = currentQuestion - 1
   
    if (previousQuestion >= 0) {
      set({ currentQuestion: previousQuestion})
    }
  },

  reset: () => {
    set({questions: [], currentQuestion: 0})
  }
}), {
  name: 'questions'
}))