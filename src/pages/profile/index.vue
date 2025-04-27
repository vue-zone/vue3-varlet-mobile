<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div text-16 text-dark mx-auto mb-60 pt-15 text-center dark:text-white>
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
