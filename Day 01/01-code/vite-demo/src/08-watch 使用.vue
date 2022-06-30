<script setup>
// watch 的高级语法
// 1. 导入
// 2. 开启监听
// 3. watch 函数的接收三个常规参数
// 3.1 第一个参数有三种取值:
//       对象, 要监听的响应式数据
//       数组, 每个元素是响应式数据
//       函数: 返回你要监听变化的响应式数据
// 3.2 第二个参数是: 响应式数据变化之后要执行的回调函数
// 3.3 第三个参数是: 一个对象, 在里面配置是否开启立刻执行或者深度监听 deep

import { computed, ref , watch} from 'vue';

const user = ref({username: 'moumou', slary: 9000})

watch(user.value, (newVal, oldVal) => {
  console.log('监听工资', newVal, oldVal);
})

const doSome = () => {
  user.value.slary += 200
}

</script>
<template>
{{user.slary}}
<button @click="doSome">do</button>
</template>
