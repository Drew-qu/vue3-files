<template>
    <h1>{{user.slary}}</h1>
    <h1>{{username}}</h1>
    <h1>{{slary}}</h1>

    <h1>toRefs => ref : {{username1}}</h1>
    <h1>toRefs => ref : {{slary1}}</h1>
    <button @click="double">翻倍</button>
    <button @click="change">改变</button>
</template>

<script>

import { reactive, toRefs, ref } from 'vue'

// 使用 toRefs 
// 1. 将响应式数据对象的每一个 属性都转换为 ref 包裹的响应式数据
// 2. 调用时, 需要 .value
export default {
  setup() {
    const user = reactive({username:'dd', slary: 2000})
    const user1 = ref({username1:'yy', slary1: 5000})
    const double = () => {
      user.slary = user.slary * 3 
    }

    let {username, slary} = toRefs(user)
    let {username1 , slary1} = toRefs(user1.value)

    const change = () => {
      username.value = 'xx'
      slary.value = '4000'
      username1.value = 'kk'
      slary1.value = 9000
    }
    return {
      user,
      double,
      username,
      slary,
      change,
      username1,
      slary1
    }
  }                       
}
</script>