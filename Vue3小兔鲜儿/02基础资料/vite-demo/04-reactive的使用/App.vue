<template>
  <h1>根组件---{{ user.name }} --- {{ user.age }}</h1>
  <button @click="change">修改</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    // reactive: 把一个复杂类型的数据变成响应式
    const user = reactive({
      name: 'zs',
      age: 100,
    })

    const change = () => {
      user.name = 'ls'
    }

    return {
      user,
      change,
    }
  },
}
</script>
