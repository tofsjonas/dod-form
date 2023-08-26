import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dod-form/',
  // plugins: [react()],
  plugins: [react({ jsxImportSource: '@emotion/react' })],
})
