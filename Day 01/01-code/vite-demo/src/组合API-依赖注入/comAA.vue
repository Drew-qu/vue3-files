<script setup>
import comAAA from './comAAA.vue';
import { inject, provide } from 'vue';

const money = provide('money', 20000)
const car = inject('car')
</script>
<template>
<div>子组件 ------{{car}}</div>
<button>车型车</button>
<comAAA></comAAA>
</template>