<template>
  <div class="singerInfo">
    <recom-title :title-name="title"></recom-title>
    <div class="singer">
      <recom-singer-item
        v-for="(item, index) in recomSinger"
        :key="index"
        :singer-item="item"
        class="singeritem"
      ></recom-singer-item>
    </div>
  </div>
</template>
<script>
import RecomSingerItem from "@/components/RecomSinger/RecomSingerItem";
import RecomTitle from "@/components/RecomTitle/RecomTitle";
export default {
  data() {
    return {
      title: "推荐歌手"
    };
  },
  props: {
    recomSinger: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    RecomSingerItem,
    RecomTitle
  }
};
</script>
<style lang="less" scoped>
.singerInfo {
  width: 1320px;
  height: 805px;
  margin-left: 120px;
  margin-top: 30px;
  .singer {
      height: 780px;
      width: 1380px;
      margin-left: 10px;
    .singeritem {
      display: flex;
      justify-content: space-around;
      float: left;
      width: 188px;
      height: 188px;
      padding: 15px;
    }
  }
}
</style>