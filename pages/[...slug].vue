<template>
  <main>
    <ContentDoc>
      <template #default="{doc}">
        <BasePageContent>
          <div class="pb-20 dark:text-stone-50">
            <div class="px-5 py-16">
              <h1 class="text-5xl">
                {{ doc.fullTitle || doc.title }}
              </h1>
            </div>
            <ContentRenderer
              class="
                prose
                max-w-none
                rounded-3xl
                bg-white
                p-8
                dark:prose-invert
                dark:bg-stone-800
              "
              :value="doc"
            />
          </div>
        </BasePageContent>
      </template>

      <template #not-found>
        <NotFound />
      </template>

      <template #empty>
        <h1 class="text-5xl">
          {{ t('message.documentIsEmpty') }}
        </h1>
      </template>
    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import NotFound from '~/components/NotFound.vue'
const { t } = useI18n()
</script>
