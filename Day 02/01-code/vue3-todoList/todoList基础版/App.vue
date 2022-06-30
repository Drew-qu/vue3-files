<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref, watch } from 'vue';

// ref 和 reactive 的区别: 
// 作用: 都可以为数据提供响应式的功能
// 区别: ref 可以为基本数据类型提供, 而 reactive 只能给引用数据类型提供
// 原理: reactive 是对对象进行代理, 而 ref 是在数据外面包了一层对象, 其中 .value 属性就是原本的数据, 最后对整个外层对象进行代理
// 提供数据
// 注意事项: 如果使用 ref 别忘了 .value
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

const list = ref(JSON.parse(localStorage.getItem('todoList') || '[]'))

// 接收状态值 子传父
const hChangeDone = (id) => {
  const todo = list.value.find(item => item.id === id)
  todo.isDone = !todo.isDone
}

// 删除功能
const hDel = (id) => {
  list.value = list.value.filter(item => item.id !== id)
}

// 添加功能
const hAdd = (name) => {
  list.value.push({
    id: Date.now(),
    name,
    isDone: false
  })
}

// 单选全选功能
const hChangeAll = (val) => {
  list.value.forEach(item => item.isDone = val)
}

// 本地存储 深度侦听 watch
// 参数1: 要侦听的数据
// 参数2: 回调函数
// 参数3: 配置对象
// 不加 value 可以监视到数据的数量变化, 但无法侦听到内部属性的变化
// 总结: 如果是引用数据类型的侦听, 不需要写 value, 但需要写 deep
// 原理: 其实就是监听的 ref 得到的响应式对象, 加 deep 可以侦听到 .value 属性的变化, 而 .value 就是我们的数组
watch(
  list,
  ()=> {localStorage.setItem('todoList', JSON.stringify(list.value))},
  {deep: true}
)
</script>

<template>
  <section class="todoapp">
    <TodoHeader @add="hAdd"></TodoHeader>
    <TodoMain :list="list" @changeDone="hChangeDone" @del="hDel" @changeAll="hChangeAll"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
