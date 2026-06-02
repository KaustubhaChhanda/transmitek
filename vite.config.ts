import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from one level up (where the assets folders are)
        resolve(__dirname, '..'),
      ]
    }
  }
})
