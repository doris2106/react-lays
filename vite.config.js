import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-lays/',
  plugins: [react()],
  server: { port: 5173 },
  root: '.',
  build: { outDir: 'dist' }
})
