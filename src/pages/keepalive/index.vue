<script setup lang="ts">
defineOptions({
  name: 'Keepalive',
})

const value = ref(0)
</script>

<template>
  <p class="mb-10">
    {{ $t('keepAlive.label') }}
  </p>

  <var-counter v-model="value" />
</template>

<route lang="json5">
  {
    name: 'Keepalive',
    meta: {
      title: '🧡 KeepAlive',
      i18n: 'menus.keepAlive',
      keepAlive: true,
    },
  }
</route>
