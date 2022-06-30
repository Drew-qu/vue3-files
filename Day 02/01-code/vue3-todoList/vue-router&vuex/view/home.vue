<template>
  <div>
    首页
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

 const route = useRoute()
 console.log(route.query);
</script>

<style lang="scss" scoped>

</style>