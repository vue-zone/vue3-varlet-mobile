<script setup lang="ts">
import useAppStore from '@/stores/modules/app'
import { languageColumns, locale } from '@/utils/i18n'

const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)

function toggle() {
  toggleDark()
  appStore.switchMode(isDark.value ? 'dark' : 'light')
}

const { t } = useI18n()

const language = computed(() => languageColumns.find(l => l.value === locale.value).text)

async function languagePicker() {
  await Picker({
    modelValue: [locale.value],
    toolbar: true,
    columns: [
      languageColumns,
    ],
    onConfirm(values) {
      if (locale.value === values[0])
        return
      locale.value = values[0] as string
    },
  })
}

const menus = computed(() => ([
  { title: t('menus.mockGuide'), router: 'mock' },
  { title: t('menus.echartsDemo'), router: 'charts' },
  { title: t('menus.persistPiniaState'), router: 'counter' },
  { title: t('menus.unocssExample'), router: 'unocss' },
  { title: t('menus.keepAlive'), router: 'keepalive' },
  { title: t('menus.iconx'), router: 'iconx' },
  { title: t('menus.404Demo'), router: 'unknown' },
]))
</script>

<template>
  <var-paper radius="10" :elevation="2">
    <var-cell border>
      {{ t('menus.darkMode') }}
      <template #extra>
        <var-switch v-model="checked" @click="toggle" />
      </template>
    </var-cell>

    <var-cell ripple border @click="languagePicker">
      {{ t('menus.language') }}
      <template #extra>
        <div class="w-80 flex items-center justify-right">
          <span>{{ language }}</span>
          <var-icon name="chevron-right" />
        </div>
      </template>
    </var-cell>

    <var-cell
      v-for="(item, index) in menus"
      :key="item.router"
      :border="index !== menus.length - 1"
      ripple
      @click="$router.push(item.router)"
    >
      {{ item.title }}
      <template #extra>
        <var-icon name="chevron-right" />
      </template>
    </var-cell>
  </var-paper>
</template>

<route lang="json5">
  {
    name: 'home',
    meta: {
      title: '主页',
      i18n: 'menus.home'
    },
  }
</route>
