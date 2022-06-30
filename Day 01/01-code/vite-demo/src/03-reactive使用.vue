<template>
    <h1>{{user.slary}}</h1>
    <button @click="double">翻倍</button>
</template>

<script>
// 使用 reactive
// 1. 引入 reactive
// 2. 使用 reactive 包裹 响应式数据  , 包裹的必须是对象
// 3. 返回
// 4. 在模块中修改时  不需要 .value, 直接调用即可
import { reactive } from 'vue'
export default {
  setup() {
    const user = reactive({username:'dd', slary: 2000})
    const double = () => {
      user.slary = user.slary * 3 
    }
    return {
      user,
      double
    }
  }                       
}
</script>