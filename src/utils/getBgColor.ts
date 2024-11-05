import { Question } from '../types/types'

export function getBgColor(info: Question, index: number) {
  const { correctAnswer, userSelectedAnswer } = info
  
  if(userSelectedAnswer == null) return 'transparent'

  if(index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

  if(index === correctAnswer) return 'green'

  if(index === userSelectedAnswer) return 'red'

  return 'transparent'
}