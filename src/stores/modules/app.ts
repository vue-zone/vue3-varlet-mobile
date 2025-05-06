import { darkTheme } from '@/styles/dark'
import { lightTheme } from '@/styles/light'
import { defineStore } from 'pinia'

export interface AppStore {
  switchMode: (val: string) => void
  setTabBarActive: (val: string) => void
}

const locaApp = localStorage.getItem('app') ? JSON.parse(localStorage.getItem('app')) : ''

const useAppStore = defineStore('app', () => {
  watchEffect(() => {
    const rootStyleVars = isDark.value ? darkTheme : lightTheme
    StyleProvider(rootStyleVars)
  })

  const tabBarActive = ref(locaApp.tabBarActive || '/')

  const setTabBarActive = (val: string) => {
    tabBarActive.value = val
  }

  return {
    tabBarActive,
    setTabBarActive,
  }
}, {
  persist: true,
})

export default useAppStore
