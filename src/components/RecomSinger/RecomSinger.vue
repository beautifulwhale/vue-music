<template>
  <div class="singerInfo">
    <recom-title :title-name="title" @click.native='goToSinger'></recom-title>
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
  },
  methods: {
    goToSinger(){
      this.$router.push('/singer')
    }
  },
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