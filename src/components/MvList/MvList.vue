<template>
  <div class="mvlist">
    <div class="latestitem">
      <div class="lateitem" v-for="item in mvList" :key="item.id">
        <mv-item :mv-item="item"></mv-item>
      </div>
    </div>
  </div>
</template>
<script>
import MvItem from "@/components/MvCategoryList/MvItem";
export default {
  props: {
    mvList: {
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
.mvlist {
  width: 1200px;
  height: 5320px;
  margin-top: 30px;
  margin-left: 20px;
  .latestitem {
    width: 1200px;
    height: 300px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .lateitem {
      width: 250px;
      height: 200px;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
}
</style>