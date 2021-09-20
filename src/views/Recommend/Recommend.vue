<template>
  <div>
    <!-- 轮播图 -->
    <swiper></swiper>
    <!-- 推荐歌单 -->
    <play-list :recom-song-list="recomPlayList"></play-list>
    <!-- 独家放送 -->
    <recom-exclusive :exclusiveList="exclusiveList"></recom-exclusive>
    <!-- 推荐歌曲 -->
    <recommend-song :recom-song-list="recomSongList"></recommend-song>
    <!-- 推荐歌手 -->
    <recom-singer :recom-singer="recomSingerList"></recom-singer>
  </div>
</template>
<script>
//子组件
import Swiper from "@/components/Swiper/Swiper";
import PlayList from "@/components/RecommendPlaylist/PlayList";
import RecommendSong from "@/components/RecomendSong/RecommendSong";
import RecomSinger from "@/components/RecomSinger/RecomSinger";
import RecomExclusive from "@/components/RecomExclusive/RecomExclusive";
//数据组件
import {
  getRecomPlayList,
  getRecomSongList,
  getRecomSingerList,
  getExclusive,
  getEverySongs,
  getCalendar
} from "../../network/recommed";
export default {
  data() {
    return {
      recomPlayList: [],
      recomSongList: [],
      recomSingerList: [],
      exclusiveList: [],
      everySongs: []
    };
  },
  created() {
    this.getRecomPlayList();
    this.getRecomSongList();
    this.getRecomSingerList();
    this.getExclusive();
    this.getEverySongs();
    this.getCalendar();
  },
  methods: {
    async getRecomPlayList() {
      const res = await getRecomPlayList();
      this.recomPlayList = res.result;
    },
    async getExclusive() {
      const res = await getExclusive();
      this.exclusiveList = res.result;
    },
    async getRecomSongList() {
      const res = await getRecomSongList();
      this.recomSongList = res.result;
    },
    async getRecomSingerList() {
      const res = await getRecomSingerList();
      this.recomSingerList = res.artists;
    },
    async getEverySongs() {
      const res = await getEverySongs();
      this.everySongs = res.data.dailySongs;
      console.log(res);
    },
    async getCalendar() {
      const res = await getCalendar();
      console.log(res);
    }
  },
  components: {
    Swiper,
    PlayList,
    RecommendSong,
    RecomSinger,
    RecomExclusive
  }
};
</script>
<style lang="less" scoped>
</style>