<script setup>
import { ref } from 'vue';
import useStore from '../store';

const {todoList} = useStore()

const taskName = ref('')

const hAdd = () => {
  if(taskName.value.length === 0) return
  todoList.hAdd(taskName.value)
  taskName.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="taskName" @keydown.enter="hAdd" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
