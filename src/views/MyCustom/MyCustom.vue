<template>
  <div class="mycustom">
    <div class="title">
      <h3>{{ nickname }}的雷达歌单</h3>
      <span>根据你的红心收藏为你推荐更多宝藏歌曲</span>
    </div>
    <div class="every-play-list">
      <div class="play-item" v-for="item in everyPlayList" :key="item.id">
        <play-list-item :play-item="item"></play-list-item>
      </div>
    </div>
    <div class="title1">
      <h3>荣耀的背后刻着一道孤独</h3>
    </div>
    <div class="good-play-list">
      <div class="good-item" v-for="item in goodPlayList" :key="item.id">
        <play-list-item :play-item="item"></play-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import PlayListItem from "@/components/PlayListItem/PlayListItem";
import { getEveryPlayList } from "../../network/recommed";
import { getGoodPlayList } from "../../network/song";
export default {
  data() {
    return {
      everyPlayList: [],
      nickname: "",
      cat: "全部",
      limit: 500,
      goodPlayList: []
    };
  },
  methods: {
    async getEveryPlayList() {
      const res = await getEveryPlayList();
      this.everyPlayList = res.recommend;
    },
    async getGoodPlayList(cat, limit) {
      const res = await getGoodPlayList(cat, limit);
      this.goodPlayList = res.playlists;
    }
  },
  created() {
    this.getEveryPlayList();
    this.getGoodPlayList(this.cat, this.limit);
    this.nickname = window.localStorage.getItem("nickname");
  },
  components: {
    PlayListItem
  }
};
</script>
<style lang="less" scoped>
.mycustom {
  margin-top: 80px;
  margin-left: 100px;
  .title {
    margin-bottom: 20px;
    h3 {
      color: black;
      margin-bottom: 5px;
    }
    span {
      font-size: 13px;
      color: gray;
    }
  }
  .title1 {
    margin-bottom: 20px;
    h3 {
      color: black;
    }
  }
  .every-play-list,
  .good-play-list {
    width: 1100px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .play-item,
    .good-item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>