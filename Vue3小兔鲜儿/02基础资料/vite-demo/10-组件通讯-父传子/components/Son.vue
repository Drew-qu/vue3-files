<script setup>
import { computed } from 'vue'

// defineProps: 接收父组件传递的数据
const props = defineProps({
  money: Number,
  car: String,
})

const myMoney = computed(() => {
  return props.money + 100
})
</script>

<template>
  <h3>子组件---{{ money }} --- {{ car }} ---{{ myMoney }}</h3>
</template>
