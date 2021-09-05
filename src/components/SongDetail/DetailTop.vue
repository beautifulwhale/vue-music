<template>
  <div class="details-top">
    <div class="avatar">
      <img :src="songDetailsTop.coverImgUrl" />
    </div>
    <div class="content">
      <div class="title">
        <h2>{{ songDetailsTop.name }}</h2>
      </div>
      <div class="creator">
        <div class="imghead">
          <img :src="creator.avatarUrl" />
        </div>
        <div class="nickname">{{ creator.nickname }}</div>
        <div class="create-time">{{ createTime }} 创建</div>
      </div>
      <div class="tags">
        <span>标签:</span>
        <div class="tag-item" v-for="item in songDetailsTop.tags" :key="item">
          {{ item }}
        </div>
      </div>
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
    createTime() {
      return dateFormat(this.songDetailsTop.createTime, "YYYY-MM-DD");
    }
  },
  methods: {
    toggleDescClick() {
      this.$emit("toggleDescClick");
    }
  }
};
</script>
<style lang="less">
.details-top {
  width: 930px;
  height: 180px;
  margin-top: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .avatar {
    img {
      border-radius: 10px;
      width: 130px;
      height: 130px;
    }
  }
  .content {
    width: 700px;
    height: 160px;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    .creator {
      display: flex;
      justify-content: flex-start;
      align-items: center;
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
    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
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
        font-weight: bold;
        margin-right: 3px;
        float: left;
      }
      p {
        font-size: 13px;
      }
    }
    .content-toggle {
      font-size: 14px;
      color: tomato;
    }
  }
}
</style>