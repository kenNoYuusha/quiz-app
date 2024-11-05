import { Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { useQuestionsStore } from '../store/questions'

export function Question() {
  const pickAnswer = useQuestionsStore(state => state.pickAnswer)
  const questions = useQuestionsStore(state => state.questions)
  const currentPositionQuestion = useQuestionsStore(state => state.currentQuestion)
  const info = questions[currentPositionQuestion]

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
              onClick={createHandleClick(index)}
              onTouchStart={createHandleClick(index)} 
              sx={{bgcolor: answer.color}}
            >
              <ListItemText primary={answer.text} sx={{textAlign: 'center'}}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
    
  )
}