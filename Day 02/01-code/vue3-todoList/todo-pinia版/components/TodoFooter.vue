<script setup>
import useTodoStore from '../store/todos';
const todos = useTodoStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.leftCount}}</strong> item left</span>
    <ul class="filters">
      <li v-for="item in todos.filters" :key="item" @click="todos.changeActive(item)"> 
        <a :class="{selected: item === todos.active}" href="javaScript:;">{{item}}</a>
      </li>
    </ul>
    <button @click="todos.clearTodo" class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
