<script setup lang="ts">
import { languageColumns, locale } from '@/utils/i18n'

const { t } = useI18n()

const menus = computed(() => ([
  { title: t('menus.mockGuide'), router: 'mock' },
  { title: t('menus.echartsDemo'), router: 'charts' },
  { title: t('menus.persistPiniaState'), router: 'counter' },
  { title: t('menus.unocssExample'), router: 'unocss' },
  { title: t('menus.keepAlive'), router: 'keepalive' },
  { title: t('menus.iconx'), router: 'iconx' },
  { title: t('menus.404Demo'), router: 'unknown' },
]))

const checked = computed<boolean>(() => isDark.value)
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

function toggle() {
  toggleDark()
}
</script>

<template>
  <var-paper radius="10" :elevation="2">
    <var-cell border>
      {{ t('menus.darkMode') }}
      <template #extra>
        <var-switch v-model="checked" @change="toggle" />
      </template>
    </var-cell>

    <var-cell ripple border @click="languagePicker">
      {{ t('menus.language') }}
      <template #extra>
        <div class="flex w-80 items-center justify-right">
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
