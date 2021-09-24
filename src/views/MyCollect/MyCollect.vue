<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">
        <collect-album></collect-album>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="second">
        <collect-singer></collect-singer>
      </el-tab-pane>
      <el-tab-pane label="视频" name="third">
        <collect-mv></collect-mv>
      </el-tab-pane>
      <el-tab-pane label="专栏" name="fourth">
        <collect-column></collect-column>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import CollectAlbum from "@/views/MyCollect/CollectAlbum";
import CollectSinger from "@/views/MyCollect/CollectSinger";
import CollectMv from "@/views/MyCollect/CollectMv";
import CollectColumn from '@/views/MyCollect/CollectColumn'
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick() {}
  },
  components: {
    CollectAlbum,
    CollectSinger,
    CollectMv,
    CollectColumn
  }
};
</script>
<style lang="less" scoped>
</style>