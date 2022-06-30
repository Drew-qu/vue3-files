<script setup>
import { ref } from 'vue'
import Form from './components/Form.vue'

// 1. 提供一个ref
const h1Ref = ref(null)
const formRef = ref(null)

const fn = () => {
  // 3. 通过ref操作DOM对象
  console.log(h1Ref.value.innerHTML)

  console.log(formRef.value.count)
  formRef.value.validate()
}
</script>

<template>
  <!-- 2. 关联DOM -->
  <h1 ref="h1Ref">根组件</h1>
  <button @click="fn">修改</button>
  <hr />

  <Form ref="formRef"></Form>
</template>
