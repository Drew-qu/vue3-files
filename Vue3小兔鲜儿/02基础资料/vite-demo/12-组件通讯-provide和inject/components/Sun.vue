<script setup>
import { inject } from 'vue'

const money = inject('money')
const car = inject('car')
const changeMoney = inject('changeMoney')
</script>
<template>
  <h5>Sun组件--{{ money }} --- {{ car }}</h5>
  <button @click="changeMoney(10)">修改</button>
</template>
