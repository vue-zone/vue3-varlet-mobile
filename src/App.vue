<script setup lang="ts">
import useRouteCache from '@/stores/modules/routeCache'

useHead({
  title: 'Vue3 Varlet Mobile',
  meta: [
    {
      name: 'description',
      content: 'An mobile web apps template based on the Vue 3 ecosystem',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})
</script>

<template>
  <app-mobile-detector>
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <section class="app-wrapper">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </section>
    </router-view>
    <TabBar />
  </app-mobile-detector>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  position: relative;
  padding: 16px;
}
</style>
