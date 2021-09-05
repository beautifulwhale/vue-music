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
    width: 1350px;
    height: 223px;
    margin-top: 80px;
    padding: 10px 100px;
    .cloud-music-item{
        margin: 10px 0 20px 10px;
        display: flex;
        flex: 1;
    }
}
</style>