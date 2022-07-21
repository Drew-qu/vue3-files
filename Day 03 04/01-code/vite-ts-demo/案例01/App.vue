<template>
  <div>
    <Channel />
    <NewsList />

  </div>
</template>

<script setup lang="ts">
import Channel from './components/Channel.vue';
import NewsList from './components/NewsList.vue';
import useStore from './store'

const {channels} = useStore()

// console.log(channels.list);


</script>

<style scoped>

</style>