import {defineStore} from 'pinia'

const useTodoListStore = defineStore('todos', {
  state: () => {
    return {
      // list: [
      //   { id: 1, name:'吃饭', isDone: false },
      //   { id: 2, name:'睡觉', isDone: true },
      //   { id: 3, name:'打豆豆', isDone: false },
      // ],
      list: JSON.parse(localStorage.getItem('todo') || '[]'),
      filters: ['全部', '已完成', '未完成'],
      active: '全部'
    }
  },
  actions: {
    checkDone(id) {
     const todo = this.list.find(item => item.id === id)
    //  console.log(todo);
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
    changeAll(val) {
      this.list.forEach(item => item.isDone = val)
    },
    clearC() {
     this.list = this.list.filter(item => !item.isDone)
    },
    changeActive(val) {
      this.active = val
    }
  },
  getters: {
    checkAll() {
      return this.list.every(item => item.isDone)
    },
    leftCount() {
      return this.list.filter(item => !item.isDone).length
    } ,
    filterTodo() {
      if(this.active === '已完成') {
        return this.list.filter(item => item.isDone)
      } else if(this.active === '未完成') {
        return this.list.filter(item => !item.isDone)
      } else {
        return this.list
      }
    }
  }
})

export default useTodoListStore