<template>
  <div class="dark min-h-screen dark:bg-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@/assets/scss/main.scss'

onMounted(() => {
  AOS.init()
})
</script>
