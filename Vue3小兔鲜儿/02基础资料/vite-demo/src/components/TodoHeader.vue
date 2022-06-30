<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addTodo'])
const name = ref('')

const add = () => {
  if (name.value) {
    // 子传父
    emit('addTodo', name.value)

    // 清空
    name.value = ''
  }
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model="name"
      @keyup.enter="add"
    />
  </header>
</template>

<style lang="less" scoped></style>
