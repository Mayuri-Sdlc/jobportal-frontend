import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
})
