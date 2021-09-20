<template>
  <div class="singer-list">
    <singer-item
      :singer-item="item"
      v-for="(item, index) in singerList"
      :key="index"
      class="singeritem"
    ></singer-item>
  </div>
</template>
<script>
import SingerItem from "@/components/SingerItem/SingerItem";
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
    SingerItem
  }
};
</script>
<style lang="less" scoped>
.singer-list {
  height: 3500px;
  width: 1200px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-left: 30px;
  .singeritem {
    width: 170px;
    height: 190px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>