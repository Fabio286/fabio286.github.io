<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div
    class="
    container
    min-h-screen
    bg-[url('/images/bg.jpg')]
    bg-cover
    font-sans
  "
  >
    <div class="flex grow flex-col justify-between">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 100%;
    // height: calc(100vh - #{$footer-height})
}
</style>
