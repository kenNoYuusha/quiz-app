import { useState } from 'react'
import { useQuestionsStore } from '../store/questions'
import { Question } from './Question'

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Card, IconButton, Stack, Typography, Slide } from '@mui/material'
import { Footer } from './Footer'

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
 
  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

  const [visible, setVisible ] = useState(true)
  const changePage = (page: () => void) => () => {
    setVisible(false)

    setTimeout(() => {
      page()
      setVisible(true)
    }, 300)
  }

  return (
    <>
      <Stack direction='row' gap={2} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <IconButton onClick={changePage(goPreviousQuestion)} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        <Typography variant='h5'>
          {currentQuestion + 1} / {questions.length}
        </Typography>
        <IconButton onClick={changePage(goNextQuestion)} disabled={currentQuestion >= questions.length -1}>
          <ArrowForwardIos />
        </IconButton>        
      </Stack>
      <Slide in={visible} direction="right">
        <Card sx={{textAlign: 'left', p: 2 }}>
          <Question />
        </Card>
      </Slide>
      <Footer />
    </>
  )
}