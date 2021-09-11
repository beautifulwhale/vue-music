<template>
  <div class="cloudmusic">
    <recom-title :title-name="title"></recom-title>
    <div class="cloud-music-item">
      <rank-item
        v-for="(item, index) in cloudList"
        :key="index"
        :rank-item="item"
      ></rank-item>
    </div>
  </div>
</template>
<script>
import RankItem from "@/components/RankDetail/RankItem";
import RecomTitle from "@/components/RecomTitle/RecomTitle";
export default {
  data() {
    return {
      title: "云音乐特色榜"
    };
  },
  props: {
    cloudList: {
      type: Array
    }
  },
  components: {
    RecomTitle,
    RankItem
  }
};
</script>
<style lang="less" scoped>
.cloudmusic{
    width: 1200px;
    height: 230px;
    margin-top: 90px;
    .cloud-music-item{
        margin: 10px 0 20px 10px;
        display: flex;
        flex: 1;
    }
}
</style>