import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        // frontend folder
        path.resolve(__dirname, '.'),
        // root node_modules (remixicon wahan hai)
        path.resolve(__dirname, '../node_modules'),
      ]
    }
  }
})
