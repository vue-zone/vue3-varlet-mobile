import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useAppStore from './modules/app'
import useCounterStore from './modules/counter'
import useRouteCacheStore from './modules/routeCache'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useAppStore, useCounterStore, useRouteCacheStore }
export default pinia
