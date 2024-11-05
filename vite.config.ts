import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  site: 'https://kennoyuusha.github.io',
  base: process.env.NODE_ENV === 'production' ? 'quiz-app' : undefined,
})
