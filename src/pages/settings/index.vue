<script setup lang="ts">
import { version } from '~root/package.json'
</script>

<template>
  <div class="text-center">
    <div class="text-gray mt-10">
      {{ $t("settings.currentVersion") }}: v{{ version }}
    </div>
  </div>
</template>

<route lang="json5">
  {
    name: 'settings',
    meta: {
      title: '我的设置',
      i18n: 'menus.settings'
    },
  }
  </route>
