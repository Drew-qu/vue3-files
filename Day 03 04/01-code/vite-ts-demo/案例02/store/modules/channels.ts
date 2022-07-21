import { defineStore } from "pinia";
import axios from "axios";
import { channelsList, channelsRes } from "../../types";



export default defineStore('channels', {
  state() {
    return {
      list: [] as channelsList,
      active: 0
    }
  },
  getters: {

  },
  actions: {
    async getChannels() {
      const res = await axios.get<channelsRes>('http://geek.itheima.net/v1_0/channels')
      // console.log(res);
      this.list = res.data.data.channels
      
    },
    changeActive(val: number) {
      this.active = val
    }
  }
})