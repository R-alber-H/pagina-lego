import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que Vercel sepa dónde están los archivos
  },
  base: '/', // Usa '/' si estás desplegando en dominio raíz
})