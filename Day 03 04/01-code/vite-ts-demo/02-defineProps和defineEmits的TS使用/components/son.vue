<template>
  <div>
    子组件

    <h2>这是一个{{house}}</h2>
    <button @click="hClick">回礼</button>
  </div>
</template>

<script setup lang="ts">
  // 非 TS 语法
  // defineProps ({
  //   house: {
  //     type: String,
  //     required: true
  //   }
  // })


  // TS 语法  泛型
  type PropsType = {
    // 可选项: 属性后面加问号
    house?: string
  }
  // 设置默认值: 解构时设置
  const {house = '茅草屋'} = defineProps< PropsType>() 

  console.log(house);
  
  // defineProps<{
  //   house: string
  // }>()

  // -----------------------------

  // 非 TS 语法
  // const emit = defineEmits(['getGift'])

  // TS 语法: 既要对事件名做约束也要对参数做约束

 const emit = defineEmits<{
    // 泛型对象中有几个事件就写几个约束
    // (): 中有 n 个参数, 固定的是 e , 其他的根据具体参数来决定
    // e: 表示事件名
    // e: 事件名
    // 后面语法为  参数名: 类型
    // 完整语法: (e: 事件名, 参数名1: 类型, 参数名2: 类型): void
    (e: 'getGift', gift: string, msg: string): void
 }>()

  const hClick = () => {
    emit('getGift','礼物', 'Holle')
  }
</script>

<style scoped>

</style>