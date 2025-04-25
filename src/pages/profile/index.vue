<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div mx-auto mb-60 pt-15 text-center text-16 text-dark dark:text-white>
    {{ t('profile.placeholder') }}
  </div>
</template>

<route lang="json5">
  {
    name: 'profile',
    meta: {
      title: '👤 个人中心',
      i18n: 'menus.profile',
    },
  }
</route>
