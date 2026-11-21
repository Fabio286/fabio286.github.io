<template>
  <div class="flex min-h-screen flex-1 flex-col bg-[#06100d] font-sans dark:text-gray-50">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <div class="flex grow flex-col justify-between">
        <slot />
      </div>
    </Html>
  </div>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true
})

useHead(() => ({
  link: head.value.link,
  meta: head.value.meta
}))
</script>
