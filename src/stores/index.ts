import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useCounterStore from './modules/counter'
import useRouteCacheStore from './modules/routeCache'
import useUserStore from './modules/user'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useCounterStore, useRouteCacheStore, useUserStore }
export default pinia
