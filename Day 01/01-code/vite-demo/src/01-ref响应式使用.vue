<template>
    {{aa.slary}} , {{aa.base}}
    <button @click="sayCh">翻倍</button>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
// 使用 ref 函数定义响应式数据
// 1. 引入 ref
// 2. 在 setup 函数中调用 ref 函数并传入数据（简单类型或者复杂类型),  const 响应式数据 =ref(初值)
// 3. 把 ref 函数的结果添加到 setup 函数的返回对象中
// 4. 使用数据 响应式数据 .value 获取进行修改
export default {
  setup() {
    const username = '卷王'

    const aa = ref({slary: 20000, base:'广州'})

    const sayCh = () => {
      aa.value.slary = aa.value.slary * 2
      // console.log('中文');
    }


    return {
      username,
      sayCh,
      aa
    }
  }                                
}
</script>