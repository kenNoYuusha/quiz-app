import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { useQuestionsStore } from './store/questions'

import { Container, Stack, Typography } from '@mui/material'
import { useSvh } from './hooks/useSvh'

function App() {
  useSvh()
  const questions = useQuestionsStore(state => state.questions)
  
  return (
    <main>
      <Container 
        maxWidth='sm' 
        disableGutters
        sx={{
          minHeight: 'calc(var(--vh, 1vh) * 100)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: questions.length > 0 ? 'start' : 'center',
          alignItems: 'center',
          gap: 2,
          paddingTop : {
            xs: '16px',
            sm: '20px',
            md: '24px',
          }
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