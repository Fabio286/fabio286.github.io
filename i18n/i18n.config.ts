import { enUS } from './enUS'
import { itIT } from './itIT'

export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  messages: {
    en: enUS,
    it: itIT
  }
}))
