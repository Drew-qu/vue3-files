<script setup>
// 在setup语法中，只需要导入子组件，就可以渲染，不需要components注册
import { ref } from 'vue'
import Son from './components/Son.vue'

const money = ref(10000)
const car = ref('五菱宏光MINI')

const xiu = (m) => {
  money.value = money.value - m
}
</script>

<template>
  <h1>根组件-{{ money }} --- {{ car }}</h1>
  <hr />
  <Son :money="money" :car="car" @xiu="xiu"></Son>
</template>
