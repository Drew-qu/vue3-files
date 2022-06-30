<template>
  <h1>根组件</h1>
  <div>鼠标的位置</div>
  <div>{{ mouse.x }}</div>
  <div>{{ mouse.y }}</div>

  <div>点击次数:{{ count }}</div>
  <button @click="add">点击</button>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue'

function useMouse() {
  // 鼠标位置的功能
  const mouse = reactive({
    x: 0,
    y: 0,
  })
  const move = (e) => {
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  onMounted(() => {
    document.addEventListener('mousemove', move)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', move)
  })
  return mouse
}

export default {
  setup() {
    const mouse = useMouse()

    // 点击+1效果
    const count = ref(0)
    const add = () => {
      count.value++
    }

    return {
      mouse,
      add,
      count,
    }
  },
}
</script>
