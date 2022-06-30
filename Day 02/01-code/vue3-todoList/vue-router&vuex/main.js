import { createApp } from 'vue'
import App from './App.vue'
// 1. 导入
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

// 2. 创建路由
const router = createRouter({
  routes,
  // 配置路由模式
  history: createWebHistory()
})

// 3. 配置路由规则
const routes = [
  {path:'/home', component: () => import('./view/home.vue')},
  {path:'/login', component: () => import('./view/login.vue')},
]


// 4. 使用 router
createApp(App).use(router).use(store).mount('#app')


// 使用 vuex@4
// 1. 按需导入需要用到的 vuex 方法
import {createStore} from 'vuex'
// 2. 创建 store 对象
const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
// 3. 注册 use 一下