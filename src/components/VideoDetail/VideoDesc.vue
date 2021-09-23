<template>
  <div class="info" v-if="Object.keys(mvData).length !== 0">
    <div class="artist">
      <div class="img">
        <img :src="imgUrl" />
        <span class="artist-name">{{ nickname }}</span>
      </div>
      <el-button round size="mini" type="danger">
        <span class="el-icon-plus"></span>
        关注
      </el-button>
    </div>
    <div class="title-info">
      <h2 class="title">
        <span>{{ videoTitle }}</span>
        <span
          class="el-icon-caret-bottom"
          @click="showDesc"
          v-show="isShowBottom"
        ></span>
        <span
          class="el-icon-caret-top"
          @click="showDesc"
          v-show="isShowTop"
        ></span>
      </h2>
      <div class="publish-info">
        <span class="time">发布:{{ publishTime }}</span>
        <span class="playcount">播放:{{ playCount }}次</span>
      </div>
    </div>
    <!-- 描述 -->
    <div class="desc" v-show="isShowDesc">
      {{ mvData.desc || mvData.description }}
    </div>
    <!-- 标签 -->
    <div class="tags" v-if="mvData.videoGroup.length">
      <div class="tagsitem" v-for="item in mvData.videoGroup" :key="item.id">
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="operation">
      <el-button round size="mini">
        <span class="iconfont icon-zan1"></span>
        赞({{ mvData.praisedCount || mvData.commentCount }})
      </el-button>

      <span v-if="mvData.subCount">
        <el-button
          round
          size="mini"
          @click="collectClick(mvData.id, t)"
          v-if="isCollect"
        >
          <span class="el-icon-folder-checked"></span>
          已收藏({{ mvData.subCount }})
        </el-button>
        <el-button round size="mini" @click="collectClick(mvData.id, t)" v-else>
          <span class="el-icon-folder-add"></span>
          收藏({{ mvData.subCount }})
        </el-button>
      </span>

      <span v-if="mvData.subscribeCount">
        <el-button
          round
          size="mini"
          @click="collectClickVideo(mvData.vid, t)"
          v-if="isCollectVideo"
        >
          <span class="el-icon-folder-checked"></span>
          已收藏({{ mvData.subscribeCount }})
        </el-button>
        <el-button
          round
          size="mini"
          @click="collectClickVideo(mvData.vid, t)"
          v-else
        >
          <span class="el-icon-folder-add"></span>
          收藏({{ mvData.subscribeCount }})
        </el-button>
      </span>

      <el-button round size="mini">
        <span class="iconfont icon-fenxiang2"></span>
        分享({{ mvData.shareCount }})
      </el-button>
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
import { collectMv } from "../../network/mvdetails";
import { collectVideo } from "../../network/video";
export default {
  data() {
    return {
      isShowDesc: false,
      isShowBottom: true,
      isShowTop: false,
      t: 1
    };
  },
  props: {
    mvData: {
      type: Object,
      default() {
        return {};
      }
    },
    likeCount: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    showDesc() {
      this.isShowTop = !this.isShowTop;
      this.isShowBottom = !this.isShowBottom;
      this.isShowDesc = !this.isShowDesc;
    },
    async getCollectMv(id, t) {
      const res = await collectMv(id, t);
    },
    async getCollectVideo(id, t) {
      const res = await collectVideo(id, t);
      console.log(res);
    },
    //收藏mv
    collectClick(id, t) {
      if (!this.isCollect) {
        this.t = 1;
        this.getCollectMv(id, t);
        this.$message({ message: "恭喜您收藏成功", type: "success" });
        this.$router.go(0);
        let newlist = JSON.parse(localStorage.getItem("collectMv")) || [];
        newlist.push(id);
        localStorage.setItem("collectMv", JSON.stringify(newlist));
      } else {
        this.$confirm("确认不在收藏此专辑?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.t = 0;
            this.getCollectMv(id, t);
            this.$router.go(0);
            let arr = JSON.parse(localStorage.getItem("collectMv"));
            var len = arr.length;
            for (let i = 0; i < len; i++) {
              if (arr[i] == id) {
                arr.splice(i, 1);
              }
            }
            localStorage.setItem("collectMv", JSON.stringify(arr));
            this.$message({
              type: "success",
              message: "删除收藏成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除收藏"
            });
          });
      }
    },
    //收藏视频
    collectClickVideo(id, t) {
      if (!this.isCollectVideo  ) {
        this.t = 1;
        this.getCollectVideo(id, t);
        this.mvData.subscribeCount += 1;
        this.$message({ message: "恭喜您收藏成功", type: "success" });
        this.$router.go(0);
        let newlist = JSON.parse(localStorage.getItem("collectVideo")) || [];
        newlist.push(id);
        localStorage.setItem("collectVideo", JSON.stringify(newlist));
      } else {
        this.$confirm("确认不在收藏此专辑?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.t = 0;
            this.getCollectVideo(id, t);
            this.mvData.subscribeCount -= 1;
            this.$router.go(0);
            let arr = JSON.parse(localStorage.getItem("collectVideo"));
            var len = arr.length;
            for (let i = 0; i < len; i++) {
              if (arr[i] == id) {
                arr.splice(i, 1);
              }
            }
            localStorage.setItem("collectVideo", JSON.stringify(arr));
            this.$message({
              type: "success",
              message: "删除收藏成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除收藏"
            });
          });
      }
    }
  },
  computed: {
    imgUrl() {
      return this.mvData.avatarUrl || this.mvData.cover;
    },
    nickname() {
      if (this.mvData.creator) {
        return this.mvData.creator.nickname;
      } else {
        return this.mvData.artistName;
      }
    },
    videoTitle() {
      return this.mvData.title || this.mvData.name;
    },
    playCount() {
      return this.mvData.playTime || this.mvData.playCount;
    },
    publishTime() {
      return dateFormat(this.mvData.publishTime);
    },
    isCollect() {
      if (JSON.parse(localStorage.getItem("collectMv")) !== null) {
        let list = JSON.parse(localStorage.getItem("collectMv"));
        let key = list.indexOf(Number(this.$route.query.id), 0);
        if (key === -1) {
          return false;
        } else {
          return true;
        }
      }
    },
    isCollectVideo() {
      if (JSON.parse(localStorage.getItem("collectVideo")) !== null) {
        let list = JSON.parse(localStorage.getItem("collectVideo"));
        let key = list.indexOf(String(this.$route.query.id), 0);
        if (key === -1) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.info {
  width: 700px;
  height: 350px;
  margin-top: 10px;
  .artist {
    width: 700px;
    height: 50px;
    .img {
      width: 620px;
      height: 50px;
      display: flex;
      flex: 1;
      align-items: center;
      float: left;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .el-button {
      margin-top: 10px;
    }
    .el-button--danger {
      background-color: red;
      border-color: red;
    }
  }
  .title-info {
    width: 700px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    .title {
      color: black;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .publish-info {
      margin-top: 10px;
      width: 700px;
      height: 30px;
      .time {
        color: gainsboro;
        font-size: 12px;
        margin-right: 10px;
      }
      .playcount {
        color: gainsboro;
        font-size: 12px;
      }
    }
  }
  .desc {
    width: 700px;
    font-size: 12px;
    margin: 20px 0;
  }
  .tags {
    width: 700px;
    height: 50px;
    margin-top: 20px;
    .tagsitem {
      padding: 5px;
      margin-right: 5px;
      float: left;
      background-color: whitesmoke;
      border-radius: 15px;
    }
    span {
      font-size: 10px;
    }
  }
}
</style>