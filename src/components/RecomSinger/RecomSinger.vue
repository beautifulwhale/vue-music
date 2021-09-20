<template>
  <div class="singerInfo">
    <recom-title :title-name="title" @click.native="goToSinger"></recom-title>
    <div class="singer">
      <singer-item
        v-for="(item, index) in recomSinger"
        :key="index"
        :singer-item="item"
        class="singeritem"
      ></singer-item>
    </div>
  </div>
</template>
<script>
import SingerItem from "@/components/SingerItem/SingerItem";
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
    SingerItem,
    RecomTitle
  },
  methods: {
    goToSinger() {
      this.$router.push("/singer");
    }
  }
};
</script>
<style lang="less" scoped>
.singerInfo {
  width: 1300px;
  height: 600px;
  margin-top: 30px;
  .singer {
    width: 1300px;
    height: 600px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 20px;
    .singeritem {
      margin-right: 20px;
      margin-bottom: 20px;
      width: 170px;
      height: 190px;
    }
  }
}
</style>