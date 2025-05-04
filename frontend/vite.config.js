import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@assets': path.resolve(__dirname, "src/assets"),
      '@components': path.resolve(__dirname, "src/components"),
      '@constants': path.resolve(__dirname, "src/constants")
    }
  }
}) 