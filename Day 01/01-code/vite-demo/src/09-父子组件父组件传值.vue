<!-- 父向子传值
    1. 父组件提供数据
    2. 父组件将数据传递给子组件
    3. 子组件通过 defineProps 进行接收
    4. 子组件渲染父组件传递的数据
 -->
<!-- 
    子向父传值  
    1. 子组件通过 defineEmit 获取 emit 对象 (因为没有 this)
    2. 子组件通过 emit 触发事件, 并且传递数据
    3. 父组件提供方法
    4. 父组件通过自定义事件的方式给子组件注册事件 
 -->
<script setup>
import { ref } from 'vue';
import son from './AppSon.vue'
const car = ref('GTR')
const money = ref(3000000)
const changeMoney = (num) => {
  money.value = money.value - num
}
</script>
<template>
father
<son :car="car" :money="money" @changeMoney="changeMoney"></son>
</template>
