<template>
    <div ref="href"> box </div>
    <button @click="hClick">dsfg </button>
</template>

<script>
import { ref } from 'vue'
// 1. 导入 ref 函数
// 2. 在 setup 中, 使用 ref 对象 => const href = ref(null) 并导\出
// 3. 模板中通过定义 ref 属性设置为步骤 1 中创建的ref对象名称建立关联
// 4. 使用 href.value
export default {
  setup() {
    const href = ref(null)
    const hClick = ()=> {
      console.log(href.value);
    }
    return {
      href,
      hClick
    }
  }                       
}
</script>