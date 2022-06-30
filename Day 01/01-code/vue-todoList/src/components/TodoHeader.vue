<script setup>
import { ref } from 'vue';

const content = ref('')
const emit = defineEmits(['addTodo'])
const add = (e) => {
  // console.log(content.value);
  if(content.value) {
    emit('addTodo', content.value)
    content.value = ''
  }
}
</script>

<template>
  <header class="header">
    <h1>Todos</h1>
    <input 
    class="new-todo" 
    placeholder="What needs to be done?" 
    autofocus 
    v-model="content"
    @keydown.enter="add"
     />
  </header>
</template>

<style lang="less" scoped></style>
