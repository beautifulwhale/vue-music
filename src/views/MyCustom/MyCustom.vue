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
      <el-button size="mini" round @click="getTags"
        ><i class="iconfont icon-guolv_Filter"></i>{{ currentTag }}</el-button
      >
    </div>
    <div class="good-play-list">
      <div class="tags" v-show="isShowTags">
        <div class="tagtitle" @click="getAllTags"><span>全部歌单</span></div>
        <div
          class="tag"
          v-for="item in fineFilter"
          :key="item.id"
          @click="changeTags(item.name)"
        >
          <div class="item">{{ item.name }}</div>
        </div>
      </div>
      <div class="good-item" v-for="item in goodPlayList" :key="item.id">
        <play-list-item :play-item="item"></play-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import PlayListItem from "@/components/PlayListItem/PlayListItem";
import { getEveryPlayList } from "../../network/recommed";
import { getGoodPlayList, getGoodTags } from "../../network/song";
export default {
  data() {
    return {
      everyPlayList: [],
      nickname: "",
      cat: "全部",
      limit: 500,
      goodPlayList: [],
      fineFilter: [],
      currentTag: "全部",
      isShowTags: false
    };
  },
  methods: {
    async getEveryPlayList() {
      const res = await getEveryPlayList();
      this.everyPlayList = res.recommend;
    },
    async getGoodTags() {
      const res = await getGoodTags();
      this.fineFilter = res.tags;
    },
    async getGoodPlayList(cat, limit) {
      const res = await getGoodPlayList(cat, limit);
      this.goodPlayList = res.playlists;
    },
    getTags() {
      this.isShowTags = !this.isShowTags;
    },
    changeTags(name) {
      this.cat = name;
      this.currentTag = name;
      this.getGoodPlayList(this.cat, this.limit);
      this.isShowTags = false;
    },
    getAllTags() {
      this.cat = "全部";
      this.currentTag = "全部";
      this.getGoodPlayList(this.cat, this.limit);
      this.isShowTags = false;
    }
  },
  created() {
    this.getEveryPlayList();
    this.getGoodTags();
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
    display: flex;
    justify-content: space-between;
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
    position: relative;
    .tags {
      width: 500px;
      height: 430px;
      background-color: #fff;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      position: absolute;
      top: -20px;
      right: 0;
      z-index: 99;
      border: 1px solid whitesmoke;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
      padding: 5px;
      border-radius: 10px;
      padding-left: 10px;
      .tagtitle {
        width: 500px;
        height: 40px;
        border-bottom: 1px solid whitesmoke;
        line-height: 40px;
        font-size: 13px;
        span {
          margin-left: 30px;
        }
      }
      .tag {
        width: 80px;
        .item {
          font-size: 13px;
        }
      }
    }
    .play-item,
    .good-item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>