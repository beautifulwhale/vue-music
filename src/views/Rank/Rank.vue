<template>
  <div>
    <clound-music :cloud-list="cloudList"></clound-music>
    <media-music :media-list="mediaList"></media-music>
  </div>
</template>
<script>
import { getRank } from "../../network/rank";
import CloundMusic from "@/components/RankDetail/CloundMusic";
import MediaMusic from "@/components/RankDetail/MediaMusic";
export default {
  data() {
    return {
      rankList: [],
      cloudList: [],
      mediaList: []
    };
  },
  created() {
    this.getRankList();
  },
  methods: {
    async getRankList() {
      const res = await getRank();
      this.rankList = res.list;
      this.cloudList = this.rankList.splice(0, 4);
      this.mediaList = this.rankList.splice(0, 30);
    }
  },
  components: {
    CloundMusic,
    MediaMusic
  }
};
</script>
<style lang="less" scoped>
</style>