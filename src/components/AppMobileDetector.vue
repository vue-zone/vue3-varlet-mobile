<script setup lang="ts">
const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
</script>

<template>
  <slot v-if="isMobile" />

  <div v-else class="px-[14px] flex flex-col min-h-screen items-center justify-center">
    <var-result
      class="bg-transparent max-w-[350px]"
      type="warning"
      :title="$t('app.warning')"
      :description="$t('app.pleaseUseMobileVisit')"
    />
  </div>
</template>
