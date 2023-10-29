import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  sitemap: {
    hostname: 'https://fabiodistasio.it'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '~/modules/sitemap'
  ],
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://fabiodistasio.it',
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        iso: 'en-US'
      },
      {
        code: 'it',
        name: 'Italiano',
        iso: 'it-IT'
      }
    ],
    defaultLocale: 'en'
  },
  content: {
    sources: ['content']
  }
})
