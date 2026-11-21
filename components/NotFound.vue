<template>
  <div class="overflow-hidden">
    <Head>
      <Title>{{ t('message.error404') }}</Title>
    </Head>
    <BasePageContent>
      <div class="-mt-24 flex h-screen items-center justify-center">
        <div class="space-y-10 pt-44 text-center">
          <IconError404 class="mx-auto dark:text-gray-50" size="128" />
          <h1 class="text-7xl font-bold dark:text-gray-50">
            {{ t('message.pageNotFound') }}
          </h1>
          <NuxtLink
            :to="localePath('/')"
            class="
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-tr
                from-orange-700
                to-orange-500
                px-5
                py-3
                text-2xl
                font-semibold
                whitespace-nowrap
                text-white
                uppercase
                hover:opacity-80
                focus:ring-2
                focus:ring-blue-400
              "
          >
            <IconHome2 class="mr-2" />
            {{ t('message.goToHome') }}
          </NuxtLink>
        </div>
      </div>
    </BasePageContent>
  </div>
</template>

<script setup lang="ts">
import { IconHome2, IconError404 } from '@tabler/icons-vue'

const localePath = useLocalePath()
const { t } = useI18n()
</script>
