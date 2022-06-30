<script setup>
import { watch } from 'vue';
import useTodoStore from '../store/todos';

const todos = useTodoStore()
watch(()=>todos.list, ()=> {
  // console.log('侦听');
  localStorage.setItem('todolist',JSON.stringify(todos.list))
},{
  deep: true
})
</script>

<template>
  <section class="main">
    <input @change="todos.changeAll(!todos.isAll)" :checked="todos.isAll" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.isDone}" v-for="item in todos.showList" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.isDone" @click="todos.changeDone(item.id)"/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="todos.hDel(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
