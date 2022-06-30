<script setup>
// 使用 computed
// 1. 导入 computed
// 2. 定义一个响应式数据
// 3. const 计算属性 = computed(函数) 在函数里需要返回这个计算公式
// 4. template 直接使用此计算属性

import { computed, ref } from 'vue';

const user = ref({username: 'moumou', slary: 9000})
const totle =  computed(()=>{
    return user.value.slary * 20
  })
</script>
<template>
 {{user.username}} 的年薪是: {{totle}}
</template>
