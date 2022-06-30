<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref, watch } from 'vue'

// 1. 提供数据
const list = ref(JSON.parse(localStorage.getItem('todos')) || [])

const delTodo = (id) => {
  list.value = list.value.filter((item) => item.id !== id)
}

const changeTodo = (id) => {
  const todo = list.value.find((item) => item.id === id)
  todo.done = !todo.done
}

const addTodo = (name) => {
  list.value.unshift({
    id: Date.now(),
    name,
    done: false,
  })
}

const checkAll = (value) => {
  list.value.forEach((item) => (item.done = value))
}

watch(
  list,
  (value) => {
    localStorage.setItem('todos', JSON.stringify(value))
  },
  { deep: true }
)
</script>

<template>
  <section class="todoapp">
    <TodoHeader @addTodo="addTodo"></TodoHeader>
    <TodoMain
      :list="list"
      @delTodo="delTodo"
      @changeTodo="changeTodo"
      @checkAll="checkAll"
    ></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
