import type { EnhancedRouteLocation } from './types'
import useRouteCacheStore from '@/stores/modules/routeCache'

import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router/auto'

import { routes } from 'vue-router/auto-routes'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
})

router.beforeEach((to: EnhancedRouteLocation, from, next) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()

  // Route cache
  routeCacheStore.addRoute(to)

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
