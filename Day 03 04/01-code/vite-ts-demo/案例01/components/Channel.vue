<script lang="ts" setup>
import useStore from '../store'

const { channels, news } = useStore()
channels.getChannels()
news.getNewList(0,Date.now())

const getNewLists = (id: number) => {
  channels.changeActive(id)
  news.getNewList(id,Date.now())
}
</script>

<template>
  <ul class="catagtory">
    <li  
    :class="{select: channels.active === item.id}" 
    v-for="item in channels.list" 
    :key="item.id"
    @click="getNewLists(item.id)"
    >{{item.name}}</li>
  </ul>
</template>

<style scoed lang="less"></style>
