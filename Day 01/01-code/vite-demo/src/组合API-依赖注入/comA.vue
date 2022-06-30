<script setup>
import { provide } from 'vue';
import comAA from './comAA.vue';
provide('car', 'lao ye che')
</script>
<template>
<div>父组件</div>
<comAA></comAA>
</template>