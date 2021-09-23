<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专辑" name="first">
        <collect-album></collect-album>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="second">
        <collect-singer></collect-singer>
      </el-tab-pane>
      <el-tab-pane label="视频" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="专栏" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import CollectAlbum from "@/views/MyCollect/CollectAlbum";
import CollectSinger from '@/views/MyCollect/CollectSinger'
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
    CollectSinger
  }
};
</script>
<style lang="less" scoped>
</style>