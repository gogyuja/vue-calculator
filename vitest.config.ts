import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        enabled: true,
        //reoprter : ['html'] 을 넣었기때문이 없다면 coverage 가 터미널에서 보인다. html을 넣었기 때문에 vitest-ui와 함께 보인다.
        reporter: ['text', 'html'],
        include: ['src/function/**'],
      },
    },
  }),
)
