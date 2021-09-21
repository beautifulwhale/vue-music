<template>
  <el-card>
    <div slot="header" class="title">
      <h3>分享</h3>
      <span class="el-icon-close" @click="closeCard"></span>
    </div>
    <div class="container">
      <div class="chooseSong" v-if="isChooseMusic">
        <el-input
          placeholder="单曲/歌手/专辑/歌单/播客"
          v-model="searchContent"
          clearable
          prefix-icon="el-icon-search"
          @change="search"
        >
        </el-input>
        <div class="recent-play">最近播放</div>
        <div class="recom-song">
          <div
            class="recom"
            v-for="item in recomSongs"
            :key="item.id"
            @click="chooseIt(item)"
          >
            <span class="iconfont icon-danqu"></span>
            <span class="name">{{ item.name }}</span>
            <span class="artist">{{ item.song.artists[0].name }}</span>
          </div>
        </div>
        <el-button type="danger" size="mini" round @click="backWrite"
          >返回</el-button
        >
      </div>
      <div class="share" v-else>
        <el-input
          type="textarea"
          :rows="7"
          placeholder="请输入内容"
          v-model="content"
          maxlength="140"
          show-word-limit
        >
        </el-input>
        <div class="music" @click="chooseSong">
          <div class="haschoose" v-if="isChooesed">
            <div class="img"><img :src="currentChoose.picUrl" /></div>
            <div class="type">单曲:</div>
            <div class="name">{{ currentChoose.name }}</div>
          </div>
          <div class="gotochoose" v-else>
            <span class="iconfont icon-wangyiyunyinle1"></span>
            <span class="text">给动态配上音乐</span>
            <span class="el-icon-plus"></span>
          </div>
        </div>
        <el-button type="danger" size="mini" round>分享</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import { getRecomSongs } from "../../network/search";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: "",
      searchContent: "",
      isChooseMusic: false,
      limit: 5,
      recomSongs: [],
      currentChoose: {},
      isChooesed: false
    };
  },
  methods: {
    async getRecomSongs(limit) {
      const res = await getRecomSongs(limit);
      this.recomSongs = res.result;
    },
    closeCard() {
      this.$emit("closeCard");
    },
    chooseSong() {
      this.isChooseMusic = true;
      this.getRecomSongs(this.limit);
    },
    backWrite() {
      this.isChooseMusic = false;
    },
    chooseIt(item) {
      this.currentChoose = item;
      this.isChooseMusic = false;
      this.isChooesed = true;
    },
    //搜索内容
    search() {
      console.log(222);
      this.$bus.$emit("getSearchData",this.searchContent);
    }
  },
  mounted() {
    this.$bus.$on("giveSearchData", data => {
      console.log(data);
    });
  }
};
</script>
<style lang="less" scoped>
.el-card {
  width: 500px;
  height: 350px;
  .title {
    width: 500px;
    display: flex;
    flex: 1;
    h3 {
      color: black;
      margin-right: 400px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .music {
    width: 458px;
    height: 40px;
    border: 1px solid gainsboro;
    cursor: pointer;
    .haschoose {
      width: 458px;
      margin-left: 20px;
      display: flex;
      flex: 1;
      .img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        line-height: 40px;
        img {
          margin-top: 5px;
          width: 25px;
          height: 25px;
        }
      }
      .type {
        width: 40px;
        margin-top: 10px;
        margin-right: 5px;
      }
      .name {
        margin-top: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .iconfont {
      color: red;
      font-size: 25px;
      margin-right: 5px;
      margin-left: 20px;
    }
    .text {
      margin-right: 250px;
    }
    .el-icon-plus {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .el-button {
    margin-top: 10px;
    margin-left: 400px;
  }
  .el-button--danger {
    background-color: red;
    border-color: red;
  }
  .chooseSong {
    width: 500px;
    .el-input {
      width: 460px;
    }
    .recent-play {
      font-size: 13px;
      margin: 10px 0;
      color: gainsboro;
    }
    .recom-song {
      width: 500px;
      //   padding: ;
      .recom {
        width: 460px;
        height: 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .iconfont {
          font-size: 14px;
          color: gainsboro;
          margin-right: 5px;
        }
        .name {
          font-size: 13px;
          margin-right: 20px;
        }
        .artist {
          font-size: 11px;
          color: gainsboro;
        }
      }
    }
  }
}
</style>