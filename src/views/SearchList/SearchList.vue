<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="单曲" name="first">
        <songs :songs="songs"></songs>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="second">
        <artists :artists="artists"></artists>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="third">
        <albums :albums="albums"></albums>
      </el-tab-pane>
      <el-tab-pane label="mv" name="fourth">
        <mvs :mvs="mvs"></mvs>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="fifth">
          <play-lists :play-lists='playlists'></play-lists>
      </el-tab-pane>
      <el-tab-pane label="歌词" name="sixth">bbbb</el-tab-pane>
      <el-tab-pane label="用户" name="senventh">
          <users :users='users'></users>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
//子组件
import Songs from "@/views/SearchList/Songs";
import Albums from "@/views/SearchList/Albums";
import Artists from "@/views/SearchList/Artists";
import Lyrics from "@/views/SearchList/Lyrics";
import PlayLists from "@/views/SearchList/PlayLists";
import Users from "@/views/SearchList/Users";
import Mvs from '@/views/SearchList/Mvs'
import { getSearchCotent } from "../../network/search";
export default {
  data() {
    return {
      activeName: "first",
      queryInfo: {
        keywords: "",
        limit: 30,
        offset: 0,
        type: 1
      },
      songs: [],
      songCount: 0,
      artists: [],
      artistCount: 0,
      albums: [],
      albumCount: 0,
      mvs: [],
      mvCount: 0,
      playlists: [],
      playlistCount: 0,
      lyrics: [],
      lyricsCount: 0,
      users: [],
      userCount: 0
    };
  },
  methods: {
    handleClick(targetName) {
      if (targetName.paneName == "first") {
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "second") {
        this.queryInfo.type = 100;
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "third") {
        this.queryInfo.type = 10;
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "fourth") {
        this.queryInfo.type = 1004;
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "fifth") {
        this.queryInfo.type = 1000;
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "sixth") {
        this.queryInfo.type = 1006;
        this.getSearchCotent(this.queryInfo);
      } else if (targetName.paneName == "senventh") {
        this.queryInfo.type = 1002;
        this.getSearchCotent(this.queryInfo);
      }
    },
    //获取搜索内容
    async getSearchCotent(params) {
      const res = await getSearchCotent(
        params.keywords,
        params.limit,
        params.offset,
        params.type
      );
    //   console.log(res);
      const data = res.result;
      this.songs = data.songs;
      this.songCount = data.songCount;
      this.artists = data.artists;
      this.artistCount = data.artistCount;
      this.albums = data.albums;
      this.albumCount = data.albumCount;
      this.mvs = data.mvs;
      this.mvCount = data.mvCount;
      this.playlists = data.playlists;
      this.playlistCount = data.playlistCount;
      this.lyrics = data.songs;
      this.lyricsCount = data.songCount;
      this.users = data.userprofiles;
      this.userCount = data.userprofileCount;
    }
  },
  components: {
    Songs,
    Albums,
    Artists,
    Lyrics,
    PlayLists,
    Users,
    Mvs
  },

  mounted() {
    this.queryInfo.keywords = this.$route.query.keywords;
    console.log(this.queryInfo.keywords);
    this.getSearchCotent(this.queryInfo);
  }
};
</script>
<style lang="less" scoped>
</style>