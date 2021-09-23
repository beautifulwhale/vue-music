<template>
  <div class="singer">
    <div class="title">
      <h3>收藏的歌手</h3>
      <span>({{ total }})</span>
    </div>
    <el-table
      :data="myCollectList"
      stripe
      style="width: 100%"
      @row-click="getSinger"
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
      <el-table-column>
        <template slot-scope="scope">
          <span class="album">专辑:{{ scope.row.albumSize }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="mvcount">MV:{{ scope.row.mvSize }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { myCollectSinger } from "../../network/singerdetails";
export default {
  data() {
    return {
      myCollectList: [],
      total: 0
    };
  },
  methods: {
    async myCollectSinger() {
      const res = await myCollectSinger();
      this.myCollectList = res.data;
      this.total = res.count;
      console.log(res);
    },
    getSinger(row) {
      this.$router.push({ path: "/singerdetails", query: { id: row.id } });
    }
  },
  created() {
    this.myCollectSinger();
  }
};
</script>
<style lang="less" scoped>
.singer {
  .title {
    margin-top: 30px;
    h3 {
      color: black;
      float: left;
      margin-right: 5px;
    }
    span {
      font-size: 12px;
      color: gray;
    }
  }
  .album,
  .mvcount {
    font-size: 12px;
    color: rgb(182, 182, 182);
  }
}
</style>