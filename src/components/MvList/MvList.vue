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
    width: 1350px;
    height: 860px;
    margin-left: 50px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>