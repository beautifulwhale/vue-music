<template>
  <div>
    <singer-info :singer-info="singerInfo"></singer-info>
    <el-card class="works-card">
      <singer-works
        class="works"
        :tags-list="tagsList"
        :singer-music="singerMusic"
      ></singer-works>
    </el-card>
  </div>
</template>
<script>
import SingerInfo from "@/components/SingerDetail/SingerInfo";
import SingerWorks from "@/components/SingerDetail/SingerWorks";
import { getSingerDetails, getSingerMusic } from "../../network/singerdetails";
export default {
  data() {
    return {
      id: 0,
      tagsList: ["单曲", "专辑", "MV", "介绍"],
      singerInfo: {},
      singerMusic: []
    };
  },
  methods: {
    async getSingerDetails(id) {
      const res = await getSingerDetails(id);
      this.singerInfo = res.data.artist;
    },
    async getSingerMusic(id) {
      const res = await getSingerMusic(id);
      this.singerMusic = res.songs;
      console.log(res);
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getSingerDetails(this.id);
    this.getSingerMusic(this.id);
  },
  components: {
    SingerInfo,
    SingerWorks
  }
};
</script>
<style lang="less" scoped>
.works-card {
  width: 1350px;
  margin: 0 auto;
  .works {
    width: 1040px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>