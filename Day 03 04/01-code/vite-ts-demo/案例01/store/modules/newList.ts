import { defineStore } from "pinia";
import axios from "axios";
import { newLists, newRes } from "../../types";

export default defineStore ('newList', {
  state() {
    return {
      list: [] as newLists
    }
  },
  getters: {

  },
  actions: {
    async getNewList (id: number, time: number) {
      const res = await axios.get<newRes>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${time}`)
      // console.log(res);
      this.list = res.data?.data?.results
    }
  }
})