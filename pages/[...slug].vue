<template>
  <main>
    <BasePageContent v-if="doc">
      <div class="pb-20 dark:text-stone-50">
        <div class="px-5 py-16">
          <h1 class="text-5xl">
            {{ doc.fullTitle || doc.title }}
          </h1>
        </div>
        <ContentRenderer
          v-if="doc.body?.value?.length"
          class="
            prose
            max-w-none
            rounded-3xl
            bg-white
            p-8
            dark:bg-stone-800
            dark:prose-invert
          "
          :value="doc"
        />
        <h1 v-else class="text-5xl">
          {{ t('message.documentIsEmpty') }}
        </h1>
      </div>
    </BasePageContent>
    <NotFound v-else />
  </main>
</template>

<script setup lang="ts">
import NotFound from '~/components/NotFound.vue'

const { t, locale, localeProperties } = useI18n()
const route = useRoute()

// Content lives in /<language>/... (e.g. /it-it/page), routes in /<locale>/... (e.g. /it/page)
const contentPath = computed(() => {
  const localePrefix = new RegExp(`^/${locale.value}(?=/|$)`)
  const pagePath = route.path.replace(localePrefix, '') || '/'
  return `/${(localeProperties.value.language || locale.value).toLowerCase()}${pagePath}`.replace(/\/$/, '')
})

const { data: doc } = await useAsyncData(
  () => `page-${contentPath.value}`,
  () => queryCollection('content').path(contentPath.value).first()
)
</script>
