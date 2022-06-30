<script setup>
import { computed } from 'vue';

  
    const props = defineProps({
      list:{
        type: Array,
        default: ()=>[]
      }
    })

    const emit = defineEmits(['changeDone', 'hDelete'])
    const changeFn = (id) => {
      emit('changeDone', id)
    }

    const hDelete = (id) => {
      emit('hDelete',id)
    }

    // 全选反选
    const isCheckAll = computed(() => {
      return props.list.every(item => item.isDone)
    })
    
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="isCheckAll"  @change="emit('checkAll', !isCheckAll)"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.isDone}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.isDone" @change="changeFn(item.id)" />
          <label>{{item.name}}</label>
          <button class="destroy" @click="hDelete(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
