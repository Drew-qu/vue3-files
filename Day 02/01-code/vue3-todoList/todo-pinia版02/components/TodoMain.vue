<script setup>
import useTodoStore from '../store/todos';

const todos = useTodoStore()

todos.$subscribe(()=>{
  // console.log('todos改变了');
  localStorage.setItem('todoList', JSON.stringify(todos.list))
})
</script>

<template>
  <section class="main">
    <input @change="todos.isCheckAll(!todos.checkAll)" id="toggle-all" class="toggle-all" type="checkbox" :checked='todos.checkAll'/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.isDone}" v-for="item in todos.showList" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.isDone" @click="todos.changeDone(item.id)"/>
          <label>{{item.name}}</label>
          <button @click="todos.hDel(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
