<template>
  <div class="rank-item" @click="playListClick(rankItem.id)">
    <img :src="rankItem.coverImgUrl" />
    <div class="title">{{ rankItem.name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    rankItem: {
      type: Object
    }
  },
  methods: {
    playListClick(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.rank-item {
  width: 150px;
  height: 160px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 108px;
    height: 108px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  }
  .title {
    width: 108px;
    margin-top: 10px;
    color: gray;
  }
}
</style>