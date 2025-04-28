import type { PickerColumnOption } from '@varlet/ui'
import { Locale } from '@varlet/ui'
import { createI18n } from 'vue-i18n'

const FALLBACK_LOCALE = 'zh-CN'

export const languageColumns: PickerColumnOption[] = [
  { text: '简体中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
]

export const i18n = setupI18n()
type I18n = typeof i18n

export const locale = computed({
  get() {
    return i18n.global.locale.value
  },
  set(language: string) {
    setLang(language, i18n)
  },
})

/** 初始化 i18n */
function setupI18n() {
  const locale = getI18nLocale()
  const i18n = createI18n({
    locale,
    legacy: false,
  })
  setLang(locale, i18n)
  return i18n
}

const varletLocales = {
  'zh-CN': Locale.zhCN,
  'en-US': Locale.enUS,
}

async function setLang(lang: string, i18n: I18n) {
  await loadLocaleMsg(lang, i18n)

  document.querySelector('html').setAttribute('lang', lang)
  localStorage.setItem('language', lang)
  i18n.global.locale.value = lang

  // 设置 Varlet 组件语言包
  Locale.add(lang, varletLocales[lang])
  Locale.use(lang)
}

/** 加载业务组件语言包 */
async function loadLocaleMsg(locale: string, i18n: I18n) {
  const messages = await import(`../locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
}

/** 获取当前语言对应的语言包名称 */
function getI18nLocale() {
  const storedLocale = localStorage.getItem('language') || navigator.language

  const langs = languageColumns.map(v => v.value as string)

  // 存在当前语言的语言包 或 存在当前语言的任意地区的语言包
  const foundLocale = langs.find(v => v === storedLocale || v.indexOf(storedLocale) === 0)

  // 若未找到，则使用 默认语言包
  const locale = foundLocale || FALLBACK_LOCALE

  return locale
}
