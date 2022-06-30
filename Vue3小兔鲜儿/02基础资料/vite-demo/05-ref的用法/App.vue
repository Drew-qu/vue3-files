<template>
  <h1>根组件---{{ money }} ---{{ user.name }} --- {{ user.age }}</h1>
  <button @click="add">加1</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const money = ref(100)

    const user = ref({
      name: 'zs',
      age: 18,
    })
    console.log(money)
    const add = () => {
      money.value++
      user.value.age++
    }
    return {
      add,
      money,
      user,
    }
  },
}
</script>
