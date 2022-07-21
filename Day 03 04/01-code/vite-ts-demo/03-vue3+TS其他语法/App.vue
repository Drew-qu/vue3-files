<template>
  <div>
    {{msg}} {{msg2}}
    <!-- 使用 $event 获取事件类型 -->
    <button @click="hClick($event)">点击获取位置</button>
    <img ref="image" src="https://wx1.sinaimg.cn/orj360/001P0DUIly1h3tptdyjk2j62c0340npf02.jpg" alt="">
    <button @click="getImg">点击获取 img</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
//  类型推论推导出来为 string
const msg = ref('hello')
// 通过泛型设置
const msg2 = ref<string>('hello')

// 设置一个引用数据类型的数据
type TodoList = {
    id: number;
    name: string;
    isDone: boolean;
}

const list = ref<TodoList[]>([
  { id: 1, name: '吃饭', isDone: false },
  { id: 2, name: '睡觉', isDone: true },
  { id: 3, name: '打豆豆', isDone: false },
])

let obj: TodoList = list.value[0]

// 开发中建议使用 ref 来定义变量

// 计算属性 => 在绝大部分场景下都不需要手动指定类型, 会类型推到
const leftCount = computed(()=> {
  return list.value.filter(item => !item.isDone).length
})

console.log(leftCount.value);

// 事件类型
const hClick= (e:MouseEvent) => {
  console.log(e.pageX, e.pageY);
} 

// DOM 中的 ref
const img = document.createElement('img')
const image = ref<HTMLImageElement | null>(null)
const getImg = () => {
  // ?. 可选链操作符: 可以让我们不需要确定每个属性是否真的有值, 如果中间某一个环节没有值,整个表达式返回 undefined

  
  console.log(image.value?.src);
  
}

</script>

<style scoped>

</style>