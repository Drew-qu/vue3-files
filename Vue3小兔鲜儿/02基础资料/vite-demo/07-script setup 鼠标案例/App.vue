<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const mouse = ref({
  x: 0,
  y: 0,
})

const move = (e) => {
  mouse.value.x = e.pageX
  mouse.value.y = e.pageY
}
onMounted(() => {
  document.addEventListener('mousemove', move)
})
onUnmounted(() => {
  document.removeEventListener('mousemove', move)
})

const count = ref(0)
const add = () => {
  count.value++
}
</script>

<template>
  <h1>根组件</h1>
  <div>鼠标的位置: {{ mouse.x }} --- {{ mouse.y }}</div>
  <div>点击次数：{{ count }}</div>
  <button @click="add">加1</button>
</template>
