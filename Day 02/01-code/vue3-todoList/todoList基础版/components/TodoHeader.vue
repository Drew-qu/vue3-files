<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add'])

const taskName = ref('')

const keyDown = () => {
  if(taskName.value.length === 0) return
  emit('add', taskName.value)
  taskName.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="taskName" @keydown.enter="keyDown" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
