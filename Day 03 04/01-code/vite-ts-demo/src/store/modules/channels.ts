import { defineStore } from "pinia";
import axios from "axios";
import { channelList, channelRes } from "../../types";


export default defineStore('channel', {
  state() {
    return {
      list: [] as channelList,
      active: 0
    }
  },
  getters: {

  },
  actions: {
    async getChannels() {
      const res = await axios.get<channelRes>('http://geek.itheima.net/v1_0/channels')
      // console.log(res);
      this.list = res.data.data.channels
      
    },
    changeActive(id:number) {
      this.active = id
    }
  }
})