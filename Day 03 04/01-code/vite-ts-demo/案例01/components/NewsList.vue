<script lang="ts" setup>
import useStore from '../store';
import dayjs from 'dayjs'
const {news} = useStore()


</script>

<template>
  <div className="list" v-for="item in news.list" :key="item.art_id">
    <div className="article_item">
      <h3 className="van-ellipsis">{{item.title}}</h3>
      <div className="img_box">
        <img
          :src="item.cover.images?.[0]"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>{{item.aut_name}}</span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
