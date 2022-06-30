import { createApp } from 'vue'
import App from './App.vue'
import ComA from './组合API-依赖注入/comA.vue'

// 创建 App 并挂载到 html 容器中
// createApp(App).mount('#app') // 简写

// 复杂写法
// 创建 App
const app = createApp(ComA)

// 挂载到 html 容器中
app.mount('#app')