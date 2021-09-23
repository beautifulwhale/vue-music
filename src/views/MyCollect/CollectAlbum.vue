<template>
  <div class="album">
    <div class="title">
      <h3>收藏的专辑</h3>
      <span>({{ total }})</span>
    </div>
    <el-table
      :data="myAlbumList"
      stripe
      style="width: 100%"
      @row-click="getAlbum"
    >
      <el-table-column prop="picUrl" width="80">
        <template slot-scope="scope">
          <el-image style="width: 50px; height: 50px" :src="scope.row.picUrl">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" width="700"> </el-table-column>
      <el-table-column prop="artists[0].name" width="350"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="size">{{ scope.row.size }}首</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { MyCollectAlbum } from "../../network/album";
export default {
  data() {
    return {
      limit: 25,
      offset: 0,
      myAlbumList: [],
      total: 0
    };
  },
  methods: {
    async MyCollectAlbum(limit, offset) {
      const res = await MyCollectAlbum(limit, offset);
      this.myAlbumList = res.data;
      this.total = res.count;
    },
    getAlbum(row) {
      this.$router.push({ path: "/ablumdetails", query: { id: row.id } });
    }
  },
  created() {
    this.MyCollectAlbum(this.limit, this.offset);
  }
};
</script>
<style lang="less" scoped>
.album{
    .title{
        margin-top: 30px;
        h3{
            color: black;
            float: left;
            margin-right: 5px;
        }
        span{
            font-size: 12px;
            color: gray;
        }

    }
}
.size {
  font-size: 12px;
  color: rgb(182, 182, 182);
}
</style>