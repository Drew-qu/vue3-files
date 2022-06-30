<template>
  <h1>根组件---{{ money }} ---{{ user.name }} --- {{ user.age }}</h1>
  <button @click="add">加1</button>
</template>

<script setup>
import { ref } from 'vue'

const money = ref(100)

const user = ref({
  name: 'zs',
  age: 18,
})

const add = () => {
  money.value++
  user.value.age++
}
</script>
