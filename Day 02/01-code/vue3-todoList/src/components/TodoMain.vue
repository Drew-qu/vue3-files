<script setup>
// import { watch } from 'vue';
import useStore from '../store';
const {todoList} = useStore()

// watch(()=> todoList.list, (value)=> {
//   // console.log(111);
//   localStorage.setItem('todo', JSON.stringify(value))
// },{
//   deep: true
// }
// )

todoList.$subscribe(() => {
  localStorage.setItem('todo',JSON.stringify(todoList.list))
})
</script>

<template>
  <section class="main">
    <input @change="todoList.changeAll(!todoList.checkAll)" id="toggle-all" class="toggle-all" type="checkbox" :checked='todoList.checkAll'/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.isDone}" v-for="item in todoList.filterTodo" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.isDone" @change="todoList.checkDone(item.id)" />
          <label>{{item.name}}</label>
          <button @click="todoList.hDel(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
