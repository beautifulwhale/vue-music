<template>
  <div class="cloud-item">
    <img :src="cloudItem.coverImgUrl" />
    <el-table :data="cloudSongs" stripe style="width: 800px">
      <el-table-column width="20px">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="name" width="500"> </el-table-column>
      <el-table-column prop="ar[0].name"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getPlayListDetails } from "../../network/songdetails";
export default {
  props: {
    cloudItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      cloudSongs: []
    };
  },
  methods: {
    async getPlayListDetails(id) {
      const res = await getPlayListDetails(id);
      this.cloudSongs = res.playlist.tracks.splice(0, 5);
      console.log(this.cloudSongs);
    }
  },
  created() {
    this.getPlayListDetails(this.cloudItem.id);
  }
};
</script>
<style lang="less" scoped>
.cloud-item{
     width: 1200px;
    height: 250px;
    display: flex;
    justify-content: space-between;
    img {
       width: 200px;
       height: 200px;
       border-radius: 10px;
       margin-right: 30px;
     }
     .el-table{
         padding-top: -80px;
     }
     .el-table__header-wrapper{
        //  display: none;
        height: 0;
     }
}

</style>