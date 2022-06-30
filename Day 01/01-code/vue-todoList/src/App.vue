<script setup>
import { ref, watch } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

const addTodo = (name) => {
  list.value.unshift({
    id:Date.now(),
    name,
    isDone: false
  })
  arr.value = list.value
}

const changeDone = (id) => {
  const todo = list.value.find((item)=> item.id === id)
  todo.isDone = !todo.isDone
}

const hDelete = (id) => {
  list.value = list.value.filter(item => item.id !== id)
}

const checkAll = (isCheckAll) => {
  list.value.forEach(item => item.isDone = isCheckAll)
}

const arr = ref([])

const change = (vle) => {
  // console.log(vle);
   if(vle.value === 'act') {
    const ans = list.value.filter(item => item.isDone === true)
     return arr.value = ans
  } else if(vle.value === 'com') {
    const ans = list.value.filter(item => item.isDone === false)
    return arr.value = ans
  } else {
    return  arr.value = list.value 
  }
}



// 清除全部
const clears= () => {
  arr.value = list.value.filter(item => item.isDone === false)
  list.value = arr.value
}
// const list = ref([
//   {
//     id: 1,
//     name: '吃饭',
//     isDone: true,
//   },
//   {
//     id: 2,
//     name: '睡觉',
//     isDone: false,
//   },
//   {
//     id: 3,
//     name: '打豆豆',
//     isDone: false,
//   },
// ])

const list = ref(JSON.parse(localStorage.getItem('todoList')) || [])
arr.value = list.value


// 侦听数组变化
watch(
  list,
  (value) => {
    localStorage.setItem('todoList',JSON.stringify(value))
  },
  {
    deep: true
  }
)

watch(
  arr,
  (value) => {
    localStorage.setItem('todoList',JSON.stringify(value))
  },
  {
    deep: true
  }
)
</script>

<template>
 <section class="todoapp">
  <TodoHeader @addTodo="addTodo"></TodoHeader>
  <TodoMain 
  :list="arr" 
  @changeDone = 'changeDone'
  @hDelete = 'hDelete'
  @checkAll = 'checkAll'
  ></TodoMain>
  <TodoFooter :list="arr" @changeType="change" @clears="clears"></TodoFooter>
 </section>
</template>

<style>

</style>
  