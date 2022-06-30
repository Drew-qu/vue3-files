<script setup>
import { computed } from 'vue'

const emit = defineEmits(['delTodo', 'changeTodo', 'checkAll'])
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})

const del = (id) => {
  emit('delTodo', id)
}

const isCheckAll = computed({
  get() {
    // 如果全部选中，那就为true
    return props.list.every((item) => item.done)
  },
  set(value) {
    emit('checkAll', value)
  },
})
</script>

<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isCheckAll"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @change="emit('changeTodo', item.id)"
          />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
