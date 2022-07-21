<template>
  <div>
    <h1>APP组件</h1>
    <Son :house='house' @getGift='getGift'/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son from './components/son.vue';


const house = ref('大别业')

const getGift = (gift: string, msg: string) => {
  console.log('收礼:' + gift + msg);
  
}

</script>

<style scoped>

</style>