<script setup>
import { inject } from 'vue';
const money = inject('money')
</script>
<template>
<div>孙组件 ----------{{money}}</div>
</template>