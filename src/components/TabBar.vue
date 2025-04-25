<script setup lang="ts">
import useAppStore from '@/stores/modules/app'
import { routeWhiteList } from '@/config/routes'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const active = ref(appStore.tabBarActive)

const show = computed(() => route.name && routeWhiteList.includes(route.name))

function change(e: string) {
  router.replace(e)
  appStore.setTabBarActive(e)
}
</script>

<template>
  <div v-if="show">
    <var-bottom-navigation v-model:active="active" :fixed="true" :safe-area="true" @change="change(active)">
      <var-bottom-navigation-item name="/" :label="t('layouts.home')" icon="home" />
      <var-bottom-navigation-item name="profile" :label="t('layouts.profile')" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>
