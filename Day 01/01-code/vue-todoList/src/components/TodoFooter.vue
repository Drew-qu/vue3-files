<script setup>
import { computed, ref } from 'vue';
//  父传子 list
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

// 计算左下角数量
const count = computed(() => {
  return props.list.filter(item => !item.isDone).length
})

// 计算中间部分
const states = ref('')
const sel = ((state) => {
  return states.value = state
})

const emit = defineEmits('changeType', 'clears')
const changeType = () => {
  emit('changeType', states)
}

// 清除全部
const clears = () => {
  emit('clears')
}
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{count}}</strong> item left</span>
    <ul class="filters" @click="changeType">
      <li>
        <a :class="{selected: sel === 'all'}" href="#/" @click="sel('all')">All</a>
      </li>
      <li>
        <a :class="{selected: sel === 'act'}" href="#/active" @click="sel('act')">Active</a>
      </li>
      <li>
        <a :class="{selected: sel === 'com'}" href="#/completed" @click="sel('com')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clears">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
