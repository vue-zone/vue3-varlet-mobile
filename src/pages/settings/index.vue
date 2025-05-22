<script setup lang="ts">
import { Dialog } from '@varlet/ui'
import { useRouter } from 'vue-router'
import { version } from '~root/package.json'
import { useUserStore } from '@/stores'
import '@varlet/ui/es/dialog/style' // 👈 关键点：引入样式！

const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()

const userInfo = computed(() => userStore.userInfo)

const actions = {
  confirm: () => {
    userStore.logout()
    router.push({ path: '/' })
  },
  cancel: () => {},
  close: () => {},
}

async function createAction() {
  actions[await Dialog(t('settings.comfirmTitle'))]()
}
</script>

<template>
  <var-space direction="column" class="text-center">
    <var-paper v-if="userInfo.uid" radius="10" :elevation="2">
      <var-cell :title="$t('settings.logout')" ripple @click="createAction" />
    </var-paper>

    <div class="text-gray">
      {{ $t("settings.currentVersion") }}: v{{ version }}
    </div>
  </var-space>
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
