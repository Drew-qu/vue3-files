// 导入子模块
import useTodoListStore from "./store";

// 导出包含子模块的函数
export default function useStore() {
  return {
    todoList: useTodoListStore()
  }
}