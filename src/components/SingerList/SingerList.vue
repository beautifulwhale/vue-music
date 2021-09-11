<template>
  <div class="singer-list">
    <recom-singer-item
      :singer-item="item"
      v-for="(item, index) in singerList"
      :key="index"
      class="singeritem"
    ></recom-singer-item>
  </div>
</template>
<script>
import RecomSingerItem from "@/components/RecomSinger/RecomSingerItem";
export default {
  props: {
    singerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    RecomSingerItem
  }
};
</script>
<style lang="less" scoped>
.singer-list {
  height: 1000px;
  width: 1200px;
  margin-top: 20px;
  cursor: pointer;
  .singeritem {
    display: flex;
    justify-content: space-around;
    float: left;
    width: 188px;
    height: 188px;
    padding: 15px;
  }
}
</style>