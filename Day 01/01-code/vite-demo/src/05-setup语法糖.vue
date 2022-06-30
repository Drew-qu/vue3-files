<script setup>
// setup 语法糖
// 1. 在 script 标签中添加 setup 
// 2. 在 script 标签内部声明的变量不需要返回
// 3. export 也不需要
// 4. 可以直接声明, 在 template 中直接使用, 更方便

import { computed, ref } from 'vue';

const user = ref({username: 'moumou', slary: 9000})
const totle =  computed(()=>{
    return user.value.slary * 20
  })
</script>
<template>
 {{user.username}} 的年薪是: {{totle}}
</template>
