import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages site: https://Gian007.github.io/VapeShop/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/VapeShop/' : '/',
})
