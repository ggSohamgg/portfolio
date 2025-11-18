import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This makes sure assets load correctly on https://ggSohamgg.github.io/portfolio/
  base: '/portfolio/',
})