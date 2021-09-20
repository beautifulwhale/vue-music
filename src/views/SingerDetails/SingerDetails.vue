<template>
  <div>
    <singer-info
      :singer-info="singerInfo"
      :songs-total="songsTotal"
      :album-total="albumTotal"
      :singer-id="singerId"
    ></singer-info>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">
        <albums :albums="singerAlbum"></albums>
      </el-tab-pane>
      <el-tab-pane label="MV" name="second">
        <template>
          <div class="singermv">
            <div class="mvitem" v-for="item in singerMv" :key="item.id">
              <mv-item :mv-item="item"></mv-item>
            </div>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="歌手详情" name="third">
        <template>
          <div class="singer-desc">
            <div class="brief-desc">
              <h4>歌手简介</h4>
              <div>{{ singerDesc.briefDesc }}</div>
            </div>
            <div class="info">
              <div
                class="detail-desc"
                v-for="(item, index) in singerDesc.introduction"
                :key="index"
              >
                <h4>{{ item.ti }}</h4>
                <div class="content">{{ item.txt }}</div>
              </div>
            </div>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="相似歌手" name="fourth">
        <template>
          <div class="simisinger">
            <div
              class="singeritem"
              v-for="(item, index) in simiArtist"
              :key="index"
            >
              <singer-item :singer-item="item"></singer-item>
            </div>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SingerInfo from "@/components/SingerDetail/SingerInfo";
import Albums from "@/views/SearchList/Albums";
import MvItem from "@/components/MvCategoryList/MvItem";
import SingerItem from "@/components/SingerItem/SingerItem";
import {
  getSingerDetails,
  getSingerMusic,
  getSingerAlbum,
  getSingerMv,
  getSingerDesc,
  getSimiSinger
} from "../../network/singerdetails";
export default {
  data() {
    return {
      id: 0,
      activeName: "first",
      tagsList: ["单曲", "专辑", "MV", "介绍"],
      singerInfo: {},
      singerMusic: [],
      albumInfo: {
        albumId: 0,
        offset: 0,
        limit: 50
      },
      singerAlbum: [],
      singerMv: [],
      singerDesc: {
        briefDesc: "",
        introduction: []
      },
      songsTotal: 0,
      albumTotal: 0,
      simiArtist: [],
      singerId: 0
    };
  },
  methods: {
    //歌手信息
    async getSingerDetails(id) {
      const res = await getSingerDetails(id);
      this.singerInfo = res.data.artist;
      this.singerId = res.data.user.userId;
    },
    //歌手的歌曲
    async getSingerMusic(id) {
      const res = await getSingerMusic(id);
      this.singerMusic = res.songs;
      this.songsTotal = res.total;
    },
    //歌手专辑
    async getSingerAlbum(params) {
      const res = await getSingerAlbum(
        params.albumId,
        params.limit,
        params.offset
      );
      this.singerAlbum = res.hotAlbums;
    },
    //歌手MV
    async getSingerMv(id) {
      const res = await getSingerMv(id);
      this.singerMv = res.mvs;
    },
    //歌手介绍
    async getSingerDesc(id) {
      const res = await getSingerDesc(id);
      this.singerDesc.briefDesc = res.briefDesc;
      this.singerDesc.introduction = res.introduction;
    },
    //相似歌手
    async getSimiSinger(id) {
      const res = await getSimiSinger(id);
      this.simiArtist = res.artists;
    },
    handleClick() {}
  },
  created() {
    this.id = this.$route.query.id;
    this.albumInfo.albumId = this.$route.query.id;
    this.getSingerDetails(this.id);
    this.getSingerMusic(this.id);
    this.getSingerAlbum(this.albumInfo);
    this.getSingerMv(this.id);
    this.getSingerDesc(this.id);
    this.getSimiSinger(this.id);
  },
  components: {
    SingerInfo,
    Albums,
    MvItem,
    SingerItem
  }
};
</script>
<style lang="less" scoped>
.singermv {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .mvitem {
    width: 250px;
    height: 220px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
.singer-desc {
  width: 1200px;
  margin-top: 20px;
  .detail-desc {
    margin-bottom: 20px;
  }
}
.simisinger {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .singeritem {
    margin-right: 10px;
    margin-bottom: 20px;
  }
}
</style>