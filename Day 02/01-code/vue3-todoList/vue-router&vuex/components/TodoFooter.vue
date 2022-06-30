
<script setup>
import { computed } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const leftCount = computed(() => props.list.filter(item => !item.isDone).length)
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
