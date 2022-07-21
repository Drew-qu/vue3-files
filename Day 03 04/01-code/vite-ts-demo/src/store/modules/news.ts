import { defineStore } from "pinia";
import axios from "axios";
import { newsLists, newsRes } from "../../types";

export default defineStore('news', {
  state() {
    return {
      list: [] as newsLists
    }
  },
  getters: {

  },
  actions: {
   async getNews(id: number, time: number) {
    const res = await axios.get<newsRes>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${time}`)
    // console.log(res);
    this.list = res.data.data.results
    
   }
  }
})