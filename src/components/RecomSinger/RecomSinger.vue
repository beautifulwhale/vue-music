<template>
  <div class="singerInfo">
    <div class="title">
      <h3>推荐歌手<i class="el-icon-arrow-right"></i></h3>
    </div>
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
export default {
  props: {
    recomSinger: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    SingerItem
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
  margin-top: 20px;
  .title {
    margin-bottom: 20px;
    color: black;
    margin-left: 20px;
  }
  .singer {
    width: 1200px;
    height: 600px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 20px;
    .singeritem {
      margin-right: 15px;
      margin-bottom: 20px;
      width: 170px;
      height: 190px;
    }
  }
}
</style>