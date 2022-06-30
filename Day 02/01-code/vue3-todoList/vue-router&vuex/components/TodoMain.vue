<script setup>
import { computed } from '@vue/reactivity';

 const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

// 子传父传值
const emit = defineEmits(['changeDone', 'del', 'changeAll'])

// 定义事件处理函数
const hChange = (id) => {
  emit('changeDone', id)
}

// 全选功能
const isAll = computed({
  get()  {
    return props.list.every( item => item.isDone)
  },
  set(val) {
     emit('changeAll', val)
  }
})

</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model='isAll'/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.isDone}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" @change="hChange(item.id)" :checked="item.isDone" />
          <label>{{item.name}}</label>
          <button @click="emit('del', item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
