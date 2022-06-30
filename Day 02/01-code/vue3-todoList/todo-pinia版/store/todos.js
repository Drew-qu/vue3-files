
import { defineStore } from 'pinia'

const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      // list: [
      //   { id: 1, name: '吃饭' , isDone: false },
      //   { id: 2, name: '睡觉' , isDone: true },
      //   { id: 3, name: '打豆豆' , isDone: false }
      // ],
      list: JSON.parse(localStorage.getItem('todolist') || '[]'),
      filters: ['全部', '未完成', '已完成'],
      active: '全部'
    }
  },
  actions: {
    changeDone(id) {
      const todo = this.list.find(item => item.id === id)
      todo.isDone = !todo.isDone
    },
    hDel(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    hAdd(name) {
      this.list.unshift({
        id: Date.now(),
        name,
        isDone: false
      })
    },
    clearTodo() {
      this.list = this.list.filter(item => !item.isDone)
    },
    changeAll(isDone) {
      return this.list.forEach((item) => (item.isDone = isDone))
    },
    changeActive(active) {
      this.active = active
    }
  },
  getters: {
    isAll() {
      return this.list.every(item => item.isDone)
    },
    
    leftCount() {
      return this.list.filter(item => !item.isDone).length
    },
    showList() {
      if(this.active === '已完成') {
        return this.list.filter(item => item.isDone)
      } else if(this.active === '未完成') {
        return this.list.filter(item => !item.isDone)
      } else {
        return this.list
      }
    }
  },
  
})

export default useTodoStore