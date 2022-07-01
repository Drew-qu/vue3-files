<script setup>
import useStore from '../store';

const { todoList } = useStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todoList.leftCount}}</strong> item left</span>
    <ul class="filters">
      <li v-for="item in todoList.filters" :key="item">
        <a @click="todoList.changeActive(item)" :class="{selected: item === todoList.active}" href="javaScript:;" >{{item}}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todoList.clearC">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
