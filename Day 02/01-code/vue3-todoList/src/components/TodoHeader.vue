<script setup>
import { ref } from 'vue';
import useTodoStore from '../store/todos';

const todos = useTodoStore()
const todoName = ref('')

const hKeydown = () => {
  if(todoName.value.length === 0) return
  todos.hAdd(todoName.value)
  todoName.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="todoName" @keydown.enter="hKeydown" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
