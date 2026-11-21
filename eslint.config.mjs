import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  tailwind.configs.recommended,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: './assets/css/main.css'
      }
    },
    rules: {
      // Match the existing code style
      'vue/max-attributes-per-line': 'off',
      '@stylistic/max-statements-per-line': 'off'
    }
  }
)
