<template>
  <div class="dark min-h-screen dark:bg-gray-900">
    <BasePageContainer>
      <NuxtPage />
    </BasePageContainer>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@/assets/scss/main.scss'
import BasePageContainer from './components/BasePageContainer.vue'

onMounted(() => {
  AOS.init()
})
</script>
