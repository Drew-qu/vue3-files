// 1. 按需导入定义 store 的方法
import { defineStore } from "pinia";
// 2. 定义一个模块并导出
// 参数1: 模块名(唯一的)
// 参数2: Store 对象
// 返回值: 是一个函数, 一般命名为 useXXXStore (规范)
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      num: 200
    }
  },
  actions: {
    add() {
      this.num += 100
    },
    addAsync() {
      setTimeout(() => {
        this.num += 200
      }, 2000);
    }
  }
})
// 按需导出, 也可以默认导出   
export default useCounterStore