import { create } from 'zustand'
import { type Question } from '../types'
import datajson from '../data.json'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
}

export const useQuestionsStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: (limit: number) => {
    //const res = await fetch('http://localhost:5173/data.json')
    //const json = await res.json()

    
    const questions = datajson.sort(() => Math.random() - 0.5).slice(0, limit)
    set({questions})
  },
}))