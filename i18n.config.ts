import { enUS } from './i18n/enUS'
import { itIT } from './i18n/itIT'

export default defineI18nConfig(() => ({
  legacy: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
    alwaysRedirect: true
  },
  fallbackLocale: 'en-US',
  messages: {
    en: enUS,
    it: itIT
  }
}))
