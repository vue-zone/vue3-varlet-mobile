<script setup lang="ts">
import { routeWhiteList } from '@/config/routes'
import { computed, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const active = ref(route.path)

const tabs = ref([
  {
    name: '/',
    label: 'layouts.home',
    icon: 'home',
  },
  {
    name: '/profile',
    label: 'layouts.profile',
    icon: 'account-circle',
  },
])

watch(
  () => route.path,
  (newValue) => {
    active.value = newValue
  },
)

const show = computed(() => route.name && routeWhiteList.includes(route.name))

function to(path: string) {
  router.replace(path)
}
</script>

<template>
  <div v-if="show">
    <var-bottom-navigation v-model:active="active" safe-area fixed>
      <var-bottom-navigation-item
        v-for="item in tabs"
        :key="item.label"
        :name="item.name"
        :label="$t(item.label)"
        :icon="item.icon"
        @click="() => to(item.name)"
      />
    </var-bottom-navigation>
  </div>
</template>
