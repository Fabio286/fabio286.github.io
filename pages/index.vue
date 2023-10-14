<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div>
    <Head>
      <Title>Fabio Di Stasio - Full Stack Web Developer</Title>
    </Head>
    <main class="my-12 flex min-h-screen items-center justify-center lg:my-0">
      <BasePageContent>
        <div class="space-y-10" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
          <div class="space-y-8">
            <img class="m-auto block rounded-full border-8 border-orange-600 duration-200 ease-linear" src="/images/picture.png">
            <h2 class="text-center text-5xl font-bold text-gray-50">
              <span class="opacity-30">About</span> Fabio Di Stasio<span class="text-orange-600">.</span>
            </h2>
            <div class="text-center text-2xl text-gray-50">
              {{ bio?.subtitle }}
            </div>
            <ContentRenderer v-if="bio" class="text-justify text-lg text-gray-50 md:text-center" :value="bio" />
          </div>
          <div class="flex justify-center">
            <a title="GitHub Profile" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://github.com/Fabio286">
              <BrandGithubIcon class="text-gray-50" size="32" />
            </a>
            <a title="Follow on Mastodon" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://mastodon.uno/@akela86">
              <BrandMastodonIcon class="text-gray-50" size="32" />
            </a>
            <a title="LinkedIn profile" rel="nofollow me" target="_blank" class="mx-2 rounded-full p-1" href="https://www.linkedin.com/in/distasiofabio/">
              <BrandLinkedinIcon class="text-gray-50" size="32" />
            </a>
          </div>
        </div>
      </BasePageContent>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const bio: Ref<ParsedContent | null> = ref(null)
const { localeProperties, localeCodes } = useI18n();

(async () => {
  await nextTick()

  const { data } = await useAsyncData('home', () => {
    return queryContent()
      .where({
        _path: `/${(localeProperties.value.iso || localeCodes.value[0]).toLowerCase()}/_home`
      })
      .findOne()
  })

  bio.value = data.value
})()
</script>
