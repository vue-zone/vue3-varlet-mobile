import type { RouteLocationNormalized } from 'vue-router'

export type EnhancedRouteLocation = RouteLocationNormalized & {
  meta: {
    name?: string
    keepAlive?: boolean
  }
}
