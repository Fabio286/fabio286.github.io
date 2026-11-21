import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        fullTitle: z.string().optional(),
        subtitle: z.string().optional(),
        projectsLabel: z.string().optional(),
        starsLabel: z.string().optional(),
        contactLabel: z.string().optional(),
        projects: z.array(z.object({
          name: z.string(),
          description: z.string(),
          icon: z.string().optional(),
          repo: z.string().optional(),
          links: z.array(z.object({
            label: z.string(),
            url: z.string()
          })).optional()
        })).optional()
      })
    })
  }
})
