<template>
  <div class="recom-song">
    <div class="title" @click="goToPlayList">
      <h3>推荐歌单<i class="el-icon-arrow-right"></i></h3>
    </div>
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
import PlayListItem from "@/components/PlayListItem/PlayListItem";
export default {
  props: {
    recomSongList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    goToPlayList() {
      this.$router.push("/song");
    }
  },
  components: {
    PlayListItem
  }
};
</script>
<style lang="less" scoped>
.recom-song {
  width: 1200px;
  height: 750px;
  .title {
    margin-bottom: 20px;
    color: black;
    margin-left: 20px;
  }
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

