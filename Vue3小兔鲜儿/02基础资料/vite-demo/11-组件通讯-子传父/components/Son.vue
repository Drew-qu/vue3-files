<script setup>
// defineProps: 接收父组件传递的数据
const props = defineProps({
  money: Number,
  car: String,
})

const emit = defineEmits(['xiu'])

const xiu = () => {
  emit('xiu', 1000)
}
</script>

<template>
  <h3>子组件---{{ money }} --- {{ car }}</h3>
  <button @click="xiu">刷火箭</button>
</template>
