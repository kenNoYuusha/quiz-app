import { useState } from 'react'
import { type Question as QuestionType } from './types/types'
import { useQuestionsStore } from './store/questions'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography, Slide } from '@mui/material'

function getBgColor(info: QuestionType, index: number) {
  const { correctAnswer, userSelectedAnswer } = info

  if(userSelectedAnswer == null) return 'transparent'

  if(index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

  if(index === correctAnswer) return 'green'

  if(index === userSelectedAnswer) return 'red'

  return 'transparent'
}

function Question({ info }: { info : QuestionType}) {
  const pickAnswer = useQuestionsStore(state => state.pickAnswer)
  console.log({info})
  const createHandleClick = (index:number) => () => {
    pickAnswer(info.id, index)
  }

  return (
   
    <>
      <Typography 
        variant='h5'
        sx={{ 
          fontSize: {
            xs: '1rem', 
            lg: '1.5rem', 
          }
        }}
      >
        {info.question}
      </Typography>

      <SyntaxHighlighter 
        language='javascript' 
        style={gradientDark}
        wrapLines={true}
        wrapLongLines={true}
      >
        {info.code}
      </SyntaxHighlighter>

      <List sx={{bgcolor: 'background.paper'}}>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null} 
              /* onTouchEnd={createHandleClick(index)} */ 
              onClick={createHandleClick(index)} 
              sx={{bgcolor:getBgColor(info, index)}}
            >
              <ListItemText primary={answer} sx={{textAlign: 'center'}}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
    
  )
}

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

  const questionInfo = questions[currentQuestion]

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
          <Question info={questionInfo}/>
        </Card>
      </Slide>
    </>
  )
}