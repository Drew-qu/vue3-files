<script setup>
import { reactive, ref, watch } from 'vue'

const money = ref(100)
const car = ref('小黄车')
const user = ref({
  name: 'zs',
  age: 18,
})

// 监听money的变化
// 参数1：监听的数据  数据或者数组  ref reactive
// 参数2：回调函数  value, oldValue
// 参数3：可选的项  {deep: true, immediate: true}
// watch(
//   money,
//   (value, oldValue) => {
//     console.log(value, oldValue)
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// )
// watch(
//   [money, car],
//   (value, oldValue) => {
//     console.log(value, oldValue)
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// )

watch(
  user,
  (value) => {
    console.log('user变化了', value)
  },
  {
    // 深度监听，，，当ref的值是一个复杂数据类型，需要深度监听
    deep: true,
  }
)

// 监听user的name的变化
watch(
  () => user.value.name,
  (value) => {
    console.log('name的变化')
    console.log(value)
  }
)
</script>

<template>
  <h1>根组件</h1>
  <div>金钱：{{ money }} ---{{ car }}</div>
  <button @click="money++">搬砖</button>
  <input type="text" v-model="car" />

  <input type="text" v-model="user.name" />
  <input type="text" v-model="user.age" />
</template>
