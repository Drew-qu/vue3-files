<template>
  <div>
   <div>{{counter.num}}</div>
   <button @click="counter.add">点击 + 100</button>

   <button @click="counter.addAsync"> 点击异步 +200</button>
  </div>
</template>

<script setup>
import useCounterStore from './store/counter';

const counter = useCounterStore()
</script>

<style lang="scss" scoped>

</style>