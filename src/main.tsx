import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import './index.css'
import './fonts.css'

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)







