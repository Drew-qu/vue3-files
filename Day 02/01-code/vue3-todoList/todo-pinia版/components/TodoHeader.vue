<script setup>
import { ref } from 'vue';

import useTodoStore from '../store/todos';

const todos = useTodoStore()

const counterName = ref('')

const Add = () => {
  if(counterName.value.length === 0) return
  todos.hAdd(counterName.value)
  counterName.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" v-model.trim="counterName" @keydown.enter="Add" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
