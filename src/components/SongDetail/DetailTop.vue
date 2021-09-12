<template>
  <div class="details-top">
    <div class="avatar">
      <img :src="songDetailsTop.coverImgUrl" />
    </div>
    <div class="content" v-if="Object.keys(songDetailsTop).length !== 0">
      <div class="title">
        <h2>{{ songDetailsTop.name }}</h2>
      </div>
      <!-- 作者 -->
      <div class="creator">
        <div class="imghead">
          <img :src="creator.avatarUrl" />
        </div>
        <div class="nickname">{{ creator.nickname }}</div>
        <div class="create-time">{{ createTime }} 创建</div>
      </div>
      <!-- 播放/收藏/分享 -->
      <div class="operation">
        <el-button
          type="danger"
          round
          size="mini"
          @click="playAll(songList[0].id)"
        >
          <span class="iconfont icon-bofang1"></span>
          播放全部
        </el-button>
        <el-button round size="mini">
          <span class="iconfont icon-a-shoucang"></span>
          收藏
        </el-button>
        <el-button round size="mini">
          <span class="iconfont icon-fenxiang2"></span>
          分享
        </el-button>
      </div>
      <!-- 标签 -->
      <div class="tags" v-if="songDetailsTop.tags.length !== 0">
        <span>标签:</span>
        <div class="tag-item" v-for="item in songDetailsTop.tags" :key="item">
          {{ item }}
        </div>
      </div>
      <!-- 描述 -->
      <div class="desc">
        <span>描述:</span>
        <p>{{ songDetailsTop.description }}</p>
      </div>
      <span class="content-toggle" @click="toggleDescClick"
        >{{ contentToggle }}...</span
      >
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
import { mapState } from "vuex";
export default {
  name: "DetailTop",
  props: {
    songDetailsTop: {
      type: Object,
      default: () => ({})
    },
    creator: {
      type: Object
    },
    contentToggle: {
      type: String
    }
  },
  computed: {
    ...mapState(["songList"]),
    createTime() {
      return dateFormat(this.songDetailsTop.createTime, "YYYY-MM-DD");
    }
  },
  methods: {
    toggleDescClick() {
      this.$emit("toggleDescClick");
    },
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    }
  }
};
</script>
<style lang="less">
.details-top {
  width: 1200px;
  height: 230px;
  margin-top: 10px;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  .avatar {
    margin-right: 30px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .content {
    width: 700px;
    height: 160px;
    flex-flow: column;
    .title {
      color: black;
      margin-bottom: 10px;
    }
    .creator {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      .nickname {
        font-size: 13px;
        color: rgb(82, 82, 253);
      }
      .imghead {
        margin-right: 10px;
        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }
      }
      .create-time {
        margin-left: 20px;
        font-size: 13px;
        color: gray;
      }
    }
    .operation {
      margin-bottom: 15px;
    }
    .el-button--danger {
      background-color: red;
      border-color: red;
    }
    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
        font-weight: bold;
      }
      .tag-item {
        font-size: 12px;
        color: grey;
        height: 20px;
        padding: 0 5px;
        line-height: 20px;
        text-align: center;
        margin-right: 5px;
        border: 1px solid gray;
        border-radius: 5px;
      }
    }
    .desc {
      max-height: 30px;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 3; /** 显示的行数 **/
      overflow: hidden;
      span {
        font-size: 13px;
        margin-right: 3px;
        float: left;
      }
      p {
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
    .content-toggle {
      font-size: 13px;
      color: grey;
    }
  }
}
</style>