import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE_URL env or default to '/'
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()]
})
