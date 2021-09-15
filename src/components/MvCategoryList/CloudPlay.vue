<template>
  <div class="cloudplay">
    <div class="title">
      <h3>网易出品</h3>
      <span class="el-icon-arrow-right"></span>
    </div>
    <div class="cloudplaymv">
      <div class="cloud-item" v-for="item in cloudList" :key="item.id">
        <mv-item :mv-item="item"></mv-item>
      </div>
    </div>
  </div>
</template>
<script>
import MvItem from "@/components/MvCategoryList/MvItem";
export default {
  props: {
    cloudList: {
      type: Array,
      default: () => []
    }
  },
  components:{
      MvItem
  }
};
</script>
<style lang="less" scoped>
.cloudplay {
  width: 1160px;
  height: 500px;
  .title {
    color: black;
    h3{
        float: left;
        margin-right: 5px;
    }
    span{
        font-weight: bolder;
        font-size: 20px;
    }
  }
  .cloudplaymv {
    width: 1160px;
    height: 300px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .cloud-item {
      width: 250px;
      height: 200px;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
}
</style>