import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    historyApiFallback: true
  },
  base: '/'
})