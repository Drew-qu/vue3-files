

<script setup>
const props = defineProps({
  car: {
    type: String
  },
  money: {
    type: Number
  }
})

const emit = defineEmits(['changeMoney'])

const change = () => {
  emit('changeMoney', 10)
}
</script>

<template>
<h1> son 组件 {{car}}</h1>
<h1>{{money}}</h1>
<button @click="change">改变</button>
</template>