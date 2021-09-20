<template>
  <div class="recom-song">
    <recom-title :title-name="title" @click.native='goToPlayList'></recom-title>
    <div class="recomsongul">
      <div
        v-for="(item, index) in recomSongList"
        :key="index"
        class="recomsong"
      >
        <play-list-item :play-item="item"></play-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import PlayListItem from '@/components/PlayListItem/PlayListItem'
import RecomTitle from "@/components/RecomTitle/RecomTitle";
export default {
  data() {
    return {
      title: "推荐歌单"
    };
  },
  props: {
    recomSongList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    goToPlayList(){
      this.$router.push('/song')
    }
  },
  components: {
    PlayListItem,
    RecomTitle
  }
};
</script>
<style lang="less" scoped>
.recom-song {
  width: 1200px;
  height: 750px;
  .recomsongul {
    width: 1200px;
    height: 750px;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    .recomsong {
      flex: 1;
    }
  }
}
</style>

