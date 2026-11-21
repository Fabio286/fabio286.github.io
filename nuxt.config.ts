import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '~/modules/sitemap'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: {
      // Node >= 22.5 built-in SQLite: no native module to compile
      sqliteConnector: 'native'
    }
  },
  // Keep the pre-Nuxt 4 layout (pages/, components/... in the project root)
  srcDir: '.',
  build: {
    // Bundle it instead of tracing it into .output/server/node_modules (its CJS entry gets lost)
    transpile: ['@tabler/icons-vue']
  },
  compatibilityDate: '2026-11-21',
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  i18n: {
    baseUrl: 'https://fabiodistasio.it',
    locales: [
      {
        code: 'en',
        name: 'English (US)',
        language: 'en-US'
      },
      {
        code: 'it',
        name: 'Italiano',
        language: 'it-IT'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  sitemap: {
    hostname: 'https://fabiodistasio.it'
  }
})
