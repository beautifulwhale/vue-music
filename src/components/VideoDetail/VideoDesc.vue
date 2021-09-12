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
    <div class="desc" v-show="isShowDesc">{{ mvData.desc }}</div>
    <!-- 标签 -->
    <div class="tags" v-if="mvData.videoGroup.length">
      <div class="tagsitem" v-for="item in mvData.videoGroup" :key="item.id">
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="operation">
      <el-button round size="medium ">
        <span class="iconfont icon-zan1"></span>
        赞({{ mvData.subCount }})
      </el-button>
      <el-button round size="medium ">
        <span class="iconfont icon-a-shoucang"></span>
        收藏({{ mvData.commentCount }})
      </el-button>
      <el-button round size="medium ">
        <span class="iconfont icon-fenxiang2"></span>
        分享({{ mvData.shareCount }})
      </el-button>
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
export default {
  data() {
    return {
      isShowDesc: false,
      isShowBottom: true,
      isShowTop: false
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