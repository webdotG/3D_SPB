import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3D_SPB",
  server: {
    host: true,
  },
  optimizeDeps: {
    include: ['*.mp4'],
  },
})
