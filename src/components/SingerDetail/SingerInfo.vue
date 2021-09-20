<template>
  <div>
    <div class="singer-desc">
      <div class="img">
        <img :src="singerInfo.cover" />
      </div>
      <div class="info">
        <div class="name">
          <h2>{{ singerInfo.name }}</h2>
        </div>
        <div class="opertion">
          <el-button round size="mini">
            <span class="iconfont icon-a-shoucang"></span> 收藏</el-button
          >
          <el-button round size="mini" @click="getUser" v-if="singerId !== 0"
            ><span class="iconfont icon-weidenglu1-copy"></span
            >个人主页</el-button
          >
        </div>
        <div class="works">
          <span class="songs">单曲数:{{ songsTotal }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    singerInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    songsTotal: {
      type: Number,
      default: 0
    },
    singerId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getUser() {
      this.$router.push({ path: "/user", query: { id: this.singerId } });
    }
  }
};
</script>
<style lang="less" scoped>
.singer-desc {
  width: 1200px;
  height: 200px;
  margin-top: 80px;
  margin-bottom: 20px;
  display: flex;
  flex: 1;
  .img {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
  }
  .info {
    width: 1000px;
    height: 200px;
    .name {
      margin-bottom: 15px;
      color: black;
    }
    .operation {
      width: 1000px;
    }
    .works {
      margin-top: 20px;
      width: 1000px;
      height: 20px;
      .songs {
        font-size: 12px;
        margin-right: 20px;
      }
    }
  }
}
</style>