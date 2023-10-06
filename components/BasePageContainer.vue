<!-- eslint-disable tailwindcss/no-contradicting-classname -->
<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div
    class="
      gradient-animate
      freezeframe
      from-10%
      via-50%
      to-90%
      container
      flex
      min-h-screen
      flex-1
      justify-center
      overflow-hidden
      bg-gradient-to-tl
      from-indigo-900
      via-slate-900
      to-stone-900
      bg-cover
      bg-center
      font-sans
      dark:text-gray-50
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
