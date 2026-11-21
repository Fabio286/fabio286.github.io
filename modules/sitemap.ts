import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'sitemap',
    version: '0.0.2',
    configKey: 'sitemap',
    compatibility: { nuxt: '>=4.0.0' }
  },
  defaults: {
    hostname: 'https://fabiodistasio.it'
  },
  setup(options, nuxt) {
    async function generateSitemap(paths: string[]) {
      // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
      const stream = new SitemapStream({ hostname: options.hostname })
      const data = await streamToPromise(Readable.from(paths).pipe(stream))
      return data.toString()
    }

    nuxt.hook('nitro:build:before', (nitro) => {
      const paths: string[] = []
      const EXCLUDED_KEYWORDS = ['/api/', '/__nuxt_content/', '/store/apps/9nhtb9sq51r1', '_payload.json', '200.html', '404.html']

      nitro.hooks.hook('prerender:route', (route) => {
        if (route.error) { return }
        if (route.contentType && !route.contentType.includes('text/html')) { return }

        const shouldBeAddedToSitemap = EXCLUDED_KEYWORDS.every(
          excludedKeyword => !route.route.includes(excludedKeyword)
        )

        if (shouldBeAddedToSitemap) {
          paths.push(route.route)
        }
      })

      nitro.hooks.hook('prerender:done', async () => {
        if (!paths.length) { return }
        const sitemap = await generateSitemap(paths.sort())
        writeFileSync(join(nitro.options.output.publicDir, 'sitemap.xml'), sitemap)

        console.log('sitemap.xml created')
      })
    })
  }
})
