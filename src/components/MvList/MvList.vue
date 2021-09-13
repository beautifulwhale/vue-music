<template>
  <div class="mvlist">
    <mv-list-item
      class="mv-list-item"
      v-for="(item, index) in mvList"
      :key="index"
      :mv-list-item="item"
    ></mv-list-item>
  </div>
</template>
<script>
import MvListItem from "@/components/MvList/MvListItem";
export default {
  props: {
    mvList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MvListItem
  }
};
</script>
<style lang="less" scoped>
.mvlist{
    width: 1200px;
    // height: 1200px;
    margin-top: 30px;
    margin-left: 50px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
}
</style>