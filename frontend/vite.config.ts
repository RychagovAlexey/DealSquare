import { URL, fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import EslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
const baseConfig = {
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(
          new URL('./src/shared/assets', import.meta.url)
        ),
      },
      {
        find: '@cmp',
        replacement: fileURLToPath(
          new URL('./src/shared/cmp', import.meta.url)
        ),
      },
      {
        find: '@stores',
        replacement: fileURLToPath(
          new URL('./src/shared/stores', import.meta.url)
        ),
      },
      {
        find: '@use',
        replacement: fileURLToPath(
          new URL('./src/shared/use', import.meta.url)
        ),
      },
    ],
  },
}
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return mergeConfig(baseConfig, {
      plugins: [EslintPlugin({}), Checker({ vueTsc: true })],
    })
  }

  return baseConfig
})
