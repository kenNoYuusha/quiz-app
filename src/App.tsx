import './App.css'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Container, Stack, Typography } from '@mui/material'
import { Start } from './Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'
import { useSvh } from './hooks/useSvh'


function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log({questions})
  useSvh()

  return (
    <main>
      <Container 
        maxWidth='sm' 
        disableGutters
        sx={{
          minHeight: 'calc(var(--vh, 1vh) * 100)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Stack direction='row' gap={2} sx={{
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <JavaScriptLogo />
          <Typography 
            variant='h2' 
            component='h1' 
            sx={{ 
              fontSize: {
                xs: '1.5rem', 
                sm: '2rem', 
                md: '2.5rem'
              }
            }}>
            Javascript Quiz
          </Typography>
        </Stack>
        { questions.length === 0 && <Start /> }
        { questions.length > 0 && <Game /> }
      </Container>
    </main>
  )
}

export default App