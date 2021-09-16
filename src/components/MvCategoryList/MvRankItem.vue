<template>
  <div class="mvrankitem" @click="getMvPlay(mvRankItem.id)">
    <div
      class="number"
      :class="number === 1 || number === 2 || number === 3 ? 'active' : ''"
    >
      {{ number }}
    </div>
    <div class="img">
      <img :src="mvRankItem.cover" />
      <span><i class="iconfont icon-redu"></i>{{ mvRankItem.playCount }}</span>
    </div>
    <div class="info">
      <div class="name">{{ mvRankItem.name }}</div>
      <div class="artist">{{ mvRankItem.artistName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mvRankItem: {
      type: Object,
      default() {
        return {};
      }
    },
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getMvPlay(id) {
      this.$router.push({
        path: "/videodetails",
        query: { id: id }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mvrankitem {
  width: 500px;
  height: 120px;
  padding: 20px;
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;
  .number {
    width: 30px;
    height: 120px;
    font-size: 25px;
    font-weight: bold;
    margin-right: 20px;
    line-height: 120px;
    color: black;
  }
  .active {
    color: red;
    font-weight: bolder;
  }
  .img {
    width: 200px;
    height: 100px;
    margin-right: 15px;
    img {
      width: 200px;
      height: 100px;
      border-radius: 10px;
    }
    span {
      position: absolute;
      top: 5px;
      right: 5px;
      color: white;
      font-size: 12px;
      .iconfont {
        font-size: 13px;
      }
    }
  }
  .info {
    width: 250px;
    height: 120px;
    .name {
      font-size: 14px;
      margin-top: 40px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .artist {
      font-size: 12px;
      margin-top: 15px;
    }
  }
}
</style>