<template>
  <div class="catelist">
    <div class="radiorank">
      <span class="iconfont icon-paihangbang--"></span>
      <span class="rank">排行榜</span>
    </div>
    <div
      class="cateitem"
      v-for="item in cateList"
      :key="item.id"
      @click="getRadioContent(item.id, item.name)"
    >
      <div class="img">
        <img :src="item.pic56x56Url" />
      </div>
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cateList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getRadioContent(id, name) {
      this.$router.push({ path: "/radiocatecontent", query: { id, name } });
    }
  }
};
</script>
<style lang="less" scoped>
.catelist {
  width: 1200px;
  height: 180px;
  background-color: rgb(252, 244, 245);
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 20px;
  .radiorank {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    .iconfont {
      font-size: 25px;
      color: tomato;
      margin-bottom: 10px;
      margin-top: 3px;
    }
    .rank {
      font-size: 12px;
    }
  }
  .cateitem {
    width: 80px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    .img {
      width: 80px;
      height: 30px;
      margin-bottom: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .name {
      font-size: 12px;
    }
  }
}
</style>