<script setup>
// 钩子函数

import { onMounted, onUnmounted } from 'vue'

// onBeforeMount  onMounted  onBeforeUpdate  onUpdated onBeforeUmmount onUmmounted
onMounted(() => {
  const h1 = document.querySelector('h1')
  console.log(h1)

  // echarts.init(document.getElementById('div'))
})

console.log('哈哈哈')
</script>

<template>
  <h1>哈哈哈哈</h1>
  <button>按钮</button>
</template>

<style></style>
