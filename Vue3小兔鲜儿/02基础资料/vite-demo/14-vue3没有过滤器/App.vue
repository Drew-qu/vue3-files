<script setup>
import moment from 'moment'
const time = new Date()

const formatTime = (time) => {
  return moment(time).format('YYYY-MM-DD')
}
</script>

<template>
  <div>当前时间:{{ formatTime(time) }}</div>
</template>
