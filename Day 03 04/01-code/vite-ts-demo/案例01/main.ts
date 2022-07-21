import { createApp } from "vue";
import App from './App.vue'
import './styles/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')



// // 学习 axios
// type channelsRes = {
//   data: {
//     channels : {
//       id: number
//       name: string
//     }[]
//   }
//   message: string
// }

// async function getChannels() {
// const res =  await axios.get<channelsRes>('http://geek.itheima.net/v1_0/channels')
// console.log(res.data.data.channels[0]);

// }

// getChannels()