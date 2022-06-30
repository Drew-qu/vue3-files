<template>
  <h1>根组件---{{ num }}</h1>
  <button @click="add">点击</button>
</template>

<script>
export default {
  // 所有的composition api的起点
  setup() {
    console.log('setup执行')
    console.log(this)
    let num = 10

    const add = () => {
      console.log('哈哈哈')
      num++
      console.log(num)
    }

    return {
      num,
      add,
    }
  },
}
</script>
