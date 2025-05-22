import { darkTheme } from '@/styles/dark'
import { lightTheme } from '@/styles/light'

// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()

watchEffect(() => {
  const rootStyleVars = isDark.value ? darkTheme : lightTheme
  StyleProvider(rootStyleVars)
})
