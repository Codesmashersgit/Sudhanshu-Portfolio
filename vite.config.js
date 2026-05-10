import { defineConfig } from 'vite'
import reactOxc from '@vitejs/plugin-react-oxc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    reactOxc(),
    tailwindcss(),
  ],
})
