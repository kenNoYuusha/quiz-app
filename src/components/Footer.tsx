import { Box, Button, Stack } from '@mui/material'
import { Done, Close, TextSnippet} from '@mui/icons-material'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/questions'

export function Footer() {
  const {correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)
  return (
    <footer>
      <Stack 
        direction='row' 
        gap={4}
        sx={{
          alignItems: 'center'
        }}
      >
        <Box sx={{display: 'inline-flex', gap: 1}}>
          <Done color='success'/>
          {correct}
        </Box>
        <Box sx={{display: 'inline-flex', gap: 1}}>
          <Close sx={{color: 'red'}}/>
          {incorrect}
        </Box>
        <Box sx={{display: 'inline-flex', gap: 1}}>
          <TextSnippet color='primary'/>
          {unanswered}
        </Box>
      </Stack>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 1}}>
        <Button 
          variant='outlined' 
          sx={{marginX: 'auto'}}
          onClick={reset}
        >
          Reset
        </Button>
      </Box>
    </footer>
  )
}