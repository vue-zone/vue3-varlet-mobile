<script setup lang="ts">
import useCounterStore from '@/stores/modules/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)

function add() {
  counterStore.increment()
}
</script>

<template>
  <h1 class="text-6xl color-pink font-semibold">
    Hello, Pinia!
  </h1>

  <p class="text-gray-700 mt-10 dark:text-white">
    This is a simple example of persisting Pinia state.
    To verify its effectiveness, you can refresh the interface and observe it.
  </p>

  <p class="mt-10">
    number：<strong class="text-green-500"> {{ counter }} </strong>
  </p>

  <var-button type="primary" class="mt-10" @click="add">
    Add
  </var-button>
</template>

<route lang="json5">
  {
    name: 'counter',
    meta: {
      title: '🍍 持久化 Pinia 状态',
      i18n: 'menus.persistPiniaState',
    },
  }
</route>
