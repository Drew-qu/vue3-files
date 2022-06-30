<script setup>
// computed 的高级语法
// 1. 传入一个对象: 有 get 和 set 两个方法
// 2. get 获取计算属性的值, 默认走 get 方法
// 3. set 监听计算属性的值
// 4. 使用 v-model 进行双向绑定 , 只有改变数据的时候 , 走 set 方法
// 5. 可以重复多次使用

import { computed, ref } from 'vue';

const user = ref({username: 'moumou', slary: 9000})
const total = computed({
  get() {
    return user.value.slary * 12
  },
  set(value) {
    return user.value.slary = value / 12
  }
})
</script>
<template>
 {{user.username}} 的年薪是: {{total}}   月薪: {{user.slary}}
 <input type="text" v-model="total">
</template>
