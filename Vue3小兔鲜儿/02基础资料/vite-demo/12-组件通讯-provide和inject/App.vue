<script setup>
import { provide, ref } from 'vue'
import Son from './components/Son.vue'
const money = ref(100)
const car = ref('小黄车')

const changeMoney = (m) => {
  money.value = money.value - m
}
provide('money', money)
provide('car', car)
provide('changeMoney', changeMoney)
</script>

<template>
  <h1>根组件-{{ money }} --- {{ car }}</h1>
  <hr />
  <Son></Son>
</template>
