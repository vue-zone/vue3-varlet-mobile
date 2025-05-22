<script setup lang="ts">
import { useUserStore } from '@/stores'
import defaultAvatar from '@/assets/images/default-avatar.svg'

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const isLogin = computed(() => !!userInfo.value.uid)

const router = useRouter()
const route = useRoute()

function handleLogin() {
  if (isLogin.value)
    return

  router.push({ path: '/login', query: { redirect: route.fullPath } })
}
</script>

<template>
  <var-paper radius="10" :elevation="2">
    <var-cell ripple @click="handleLogin">
      <template #icon>
        <var-avatar :src="userInfo.avatar || defaultAvatar" color="var(--color-body)" class="h-56 w-56" />
      </template>

      <template #extra>
        <div class="flex w-60 items-center justify-end">
          <span v-if="isLogin">{{ userInfo.name }}</span>
          <span v-else class="text-15">{{ $t('profile.login') }}</span>
          <var-icon v-if="!isLogin" name="chevron-right" size="26" />
        </div>
      </template>
    </var-cell>
  </var-paper>

  <var-paper radius="10" :elevation="2" class="mt-16">
    <var-cell :title="$t('profile.settings')" ripple border @click="$router.push('/settings')">
      <template #icon>
        <div class="i-carbon:settings text-gray-400 mr-5 self-center" />
      </template>
      <template #extra>
        <var-icon name="chevron-right" />
      </template>
    </var-cell>

    <var-cell :title="$t('profile.docs')" ripple>
      <template #icon>
        <div class="i-carbon:doc text-gray-400 mr-5 self-center" />
      </template>
      <template #extra>
        <var-icon name="chevron-right" />
      </template>
    </var-cell>
  </var-paper>
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
