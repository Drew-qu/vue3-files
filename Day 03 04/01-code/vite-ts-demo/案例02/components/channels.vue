<script lang="ts" setup>
import useStore from '../store'


const { channels, news } = useStore()
news.getNewLists(0, Date.now())
channels.getChannels()

const getNewList = (id: number) => {
  channels.changeActive(id)
  news.getNewLists(id, Date.now())
}


</script>

<template>
  <ul class="catagtory">
    <li 
    :class="{select: item.id === channels.active}" 
    v-for="item in channels.list" 
    :key="item.id"
    @click="getNewList(item.id)"
    >{{item.name}}</li>
  </ul>
</template>

<style scoed lang="less"></style>
