<template>
  <div class="hitplay">
    <div class="title">
      <h3>热播MV</h3>
      <span class="el-icon-arrow-right"></span>
    </div>
    <div class="hotplaymv">
      <div class="hotitem" v-for="item in HotList" :key="item.id">
        <mv-item :mv-item="item"></mv-item>
      </div>
    </div>
  </div>
</template>
<script>
import MvItem from "@/components/MvCategoryList/MvItem";
export default {
  props: {
    HotList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MvItem
  }
};
</script>
<style lang="less" scoped>
.hitplay {
  width: 1160px;
  height: 280px;
  .title {
    color: black;
    h3 {
      float: left;
      margin-right: 5px;
    }
    span {
      font-weight: bolder;
      font-size: 20px;
    }
  }
  .hotplaymv {
    width: 1160px;
    height: 300px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .hotitem {
      width: 250px;
      height: 200px;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
}
</style>