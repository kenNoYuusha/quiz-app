import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionsStore } from './store/questions'
import { type Question as QuestionType } from './types'

function Question({ info }: { info : QuestionType}) {
  return (
    <Card sx={{textAlign: 'left', p: 2 }}>
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
            <ListItemButton>
              <ListItemText primary={answer} sx={{textAlign: 'center'}}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo}/>
    </>
  )
}