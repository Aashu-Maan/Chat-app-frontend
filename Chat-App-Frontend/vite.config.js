import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 ensures correct asset paths
  build: {
    outDir: 'dist', // Vercel expects this
  },
})