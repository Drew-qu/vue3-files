<script setup>
import { computed, ref, watch } from 'vue'

const age = ref(18)

const nextAge = computed(() => {
  console.log('我会执行')
  return +age.value + 1
})

// 后年的年龄
const nextAge2 = computed({
  get() {
    return +age.value + 2
  },
  set(value) {
    age.value = value - 2
  },
})
</script>

<template>
  <h1>根组件</h1>
  今年的年龄：<input type="text" v-model="age" />
  <div>明年的年龄：{{ nextAge }}</div>
  后年的年龄：<input type="text" v-model="nextAge2" />
</template>
