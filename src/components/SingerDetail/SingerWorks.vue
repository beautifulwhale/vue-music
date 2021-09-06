<template>
  <div class="all-works">
    <div class="tags">
      <div
        class="tag"
        v-for="(item, index) in tagsList"
        :key="index"
        @click="tagClick(index)"
        :class="{ active: currentIndex === index }"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- 单曲 -->
    <detail-list :song-list="singerMusic" v-show="isShowSong"></detail-list>
    <!-- 专辑 -->
    <div class="album" v-show="isShowAlbum">
      <div class="album-item" v-for="(item, index) in singerAlbum" :key="index">
        <play-list-item :recom-song-item="item"></play-list-item>
      </div>
      <!-- 分页 -->
      <div class="page">
        <el-button type="primary" @click="pageUp" :disabled="isPageUp"
          >上一页</el-button
        >
        <el-button type="primary" @click="pageDown" :disabled="isPageDown"
          >下一页</el-button
        >
      </div>
    </div>
    <!-- MV -->
    <div class="mv" v-show="isShowMv">
      <div class="mvitem" v-for="(item, index) in singerMv" :key="index">
        <mv-list-item :mv-list-item="item"></mv-list-item>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="singer-desc" v-show="isShowDesc">
      <div class="brief-desc">
        <h2>歌手简介</h2>
        <div>{{ singerDesc.briefDesc }}</div>
      </div>
      <div class="info">
        <div
          class="detail-desc"
          v-for="(item, index) in singerDesc.introduction"
          :key="index"
        >
          <h2>{{ item.ti }}</h2>
          <div class="content">{{ item.txt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailList from "@/components/SongDetail/DetailList";
import PlayListItem from "@/components/RecommendPlaylist/PlayListItem";
import MvListItem from "@/components/MvList/MvListItem";
export default {
  props: {
    tagsList: {
      type: Array,
      default: () => []
    },
    singerMusic: {
      type: Array,
      default: () => []
    },
    singerAlbum: {
      type: Array,
      default: () => []
    },
    singerMv: {
      type: Array,
      default: () => []
    },
    singerDesc: {
      type: Object,
      default() {
        return {};
      }
    },
    isPageUp: {
      type: Boolean
    },
    isPageDown: {
      type: Boolean
    }
  },
  data() {
    return {
      currentIndex: 0,
      isShowSong: true,
      isShowAlbum: false,
      isShowMv: false,
      isShowDesc: false
    };
  },
  methods: {
    tagClick(index) {
      this.currentIndex = index;
      if (index === 0) {
        this.isShowSong = true;
        this.isShowAlbum = false;
        this.isShowMv = false;
        this.isShowDesc = false;
      } else if (index === 1) {
        this.isShowAlbum = true;
        this.isShowSong = false;
        this.isShowMv = false;
        this.isShowDesc = false;
      } else if (index === 2) {
        this.isShowMv = true;
        this.isShowSong = false;
        this.isShowAlbum = false;
        this.isShowDesc = false;
      } else if (index === 3) {
        this.isShowDesc = true;
        this.isShowMv = false;
        this.isShowSong = false;
        this.isShowAlbum = false;
      } else {
        return null;
      }
    },
    pageUp() {
      this.$emit("pageUp");
    },
    pageDown() {
      this.$emit("pageDown");
    }
  },
  computed: {},
  components: {
    DetailList,
    PlayListItem,
    MvListItem
  }
};
</script>
<style lang="less" scoped>
.all-works {
  width: 1040px;
  .tags {
    width: 1000px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    .tag {
      width: 80px;
      height: 30px;
      text-align: center;
    }
    span {
      font-size: 18px;
    }
    .active {
      border-bottom: 2px solid tomato;
      font-weight: bold;
    }
  }
  .album {
    width: 1000px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    .album-item {
      flex: 1;
    }
    .page {
      width: 500px;
      height: 40px;
      display: flex;
      justify-content: space-around;
      margin: 20px auto;
    }
  }
  .mv {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .mvitem {
      width: 230px;
      height: 192px;
      margin: 20px;
    }
  }
  .singer-desc{
    width: 1000px;
    margin-top: 20px;
    .brief-desc{
      margin-bottom: 30px;
      h2{
        margin-bottom: 10px;
      }
      >div{
        text-indent:2em;
      }
    }
    .detail-desc{
      margin-bottom: 30px;
      h2{
        margin-bottom: 10px;
      }
    }
  }
}
</style>