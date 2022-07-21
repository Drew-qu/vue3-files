import { defineStore } from "pinia";

import axios from 'axios'
import { channelList, channelsRes } from "../../types";


 export default defineStore('channels', {
  state() {
    return {
      // 类型断言: as
     list: [] as channelList,
     active: -1
    }
  },
  getters :{

  },
  actions: {
    async getChannels() {
      const res = await axios.get<channelsRes>('http://geek.itheima.net/v1_0/channels')
      this.list= res.data.data.channels
      
      // 默认让一个高亮, 将 active 的值设置为第一个元素的id
      this.active = res.data?.data?.channels[0].id
    },
    changeActive(val: number){
      this.active = val
    }
  }
 })