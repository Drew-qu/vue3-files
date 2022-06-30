<script setup>
import { reactive, ref, toRef, toRefs } from 'vue'

// const user = reactive({
//   name: 'zs',
//   age: 18,
// })
const user = ref({
  name: 'zs',
  age: 18,
})
// 如果对一个响应式对象进行解构，解构出来的数据会丢失响应式
// toRef: 让响应式对象中某个属性也变成响应式
// toRefs: 让响应式对象中所有的属性都变成响应式的
// const { name, age } = user
// const name = toRef(user, 'name')
// const age = toRef(user, 'age')

const { name, age } = toRefs(user.value)
</script>

<template>
  <div>{{ name }} --- {{ age }}</div>
  <input type="text" v-model="name" />
  <input type="text" v-model="age" />
</template>
