<template>
  <h1>根组件</h1>
  <div>鼠标的位置</div>
  <div>{{ mouse.x }}</div>
  <div>{{ mouse.y }}</div>

  <div>点击次数:{{ count }}</div>
  <button @click="add">点击</button>
</template>

<script>
export default {
  data() {
    return {
      mouse: {
        x: 0,
        y: 0,
      },
      count: 0,
    }
  },
  methods: {
    move(e) {
      this.mouse.x = e.pageX
      this.mouse.y = e.pageY
    },
    add() {
      this.count++
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.move)
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.move)
  },
}
</script>
