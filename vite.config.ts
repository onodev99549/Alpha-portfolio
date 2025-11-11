import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // fail if 5173 is taken so we know what's wrong
    host: true, // listen on all addresses (useful on Windows WSL/LAN)
    open: true,
  },
  preview: {
    host: true,
    port: 5173,
  }
})
