<template>
  <div>
   <ul>
    <li><router-link to="/home?name=jeck&age=18">首页</router-link></li>
    <li><router-link to="/login">登录</router-link></li>
   </ul>
   <!-- 路由出口 -->
   <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>