<template>
  <div>
    <singer-info :singer-info="singerInfo"></singer-info>
    <el-card class="works-card">
      <singer-works
        class="works"
        :tags-list="tagsList"
        :singer-music="singerMusic"
        :singer-album="singerAlbum"
        :singer-mv="singerMv"
        :singer-desc='singerDesc'
        :is-page-up="isPageUp"
        :is-page-down="isPageDown"
        @pageUp="pageUp"
        @pageDown="pageDown"
      ></singer-works>
    </el-card>
  </div>
</template>
<script>
import SingerInfo from "@/components/SingerDetail/SingerInfo";
import SingerWorks from "@/components/SingerDetail/SingerWorks";
import {
  getSingerDetails,
  getSingerMusic,
  getSingerAlbum,
  getSingerMv,
  getSingerDesc
} from "../../network/singerdetails";
export default {
  data() {
    return {
      id: 0,
      tagsList: ["单曲", "专辑", "MV", "介绍"],
      singerInfo: {},
      singerMusic: [],
      albumInfo: {
        albumId: 0,
        offset: 0,
        limit: 30
      },
      singerAlbum: [],
      singerMv: [],
      singerDesc: {
        briefDesc: "",
        introduction: []
      }
    };
  },
  computed: {
    isPageUp() {
      return this.albumInfo.offset === 0 ? true : false;
    },
    isPageDown() {
      return this.singerAlbum.length < 30 ? true : false;
    }
  },
  methods: {
    async getSingerDetails(id) {
      const res = await getSingerDetails(id);
      this.singerInfo = res.data.artist;
    },
    async getSingerMusic(id) {
      const res = await getSingerMusic(id);
      this.singerMusic = res.songs;
    },
    async getSingerAlbum(params) {
      const res = await getSingerAlbum(
        params.albumId,
        params.limit,
        params.offset
      );
      this.singerAlbum = res.hotAlbums;
    },
    async getSingerMv(id) {
      const res = await getSingerMv(id);
      this.singerMv = res.mvs;
    },
    async getSingerDesc(id) {
      const res = await getSingerDesc(id);
      this.singerDesc.briefDesc = res.briefDesc;
      this.singerDesc.introduction = res.introduction;
    },
    pageUp() {
      this.albumInfo.offset -= 30;
      this.getSingerAlbum(this.albumInfo);
    },
    pageDown() {
      this.albumInfo.offset += 30;
      this.getSingerAlbum(this.albumInfo);
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.albumInfo.albumId = this.$route.query.id;
    this.getSingerDetails(this.id);
    this.getSingerMusic(this.id);
    this.getSingerAlbum(this.albumInfo);
    this.getSingerMv(this.id);
    this.getSingerDesc(this.id);
  },
  components: {
    SingerInfo,
    SingerWorks
  }
};
</script>
<style lang="less" scoped>
.works-card {
  width: 1100px;
  margin: 0 auto;
  .works {
    width: 1040px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>