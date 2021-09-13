<template>
  <el-table
    :data="playLists"
    stripe
    style="width: 100%"
    @row-click="getPlayList"
  >
    <el-table-column prop="coverImgUrl" width="120">
      <template slot-scope="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.coverImgUrl"
        >
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </template>
    </el-table-column>
    <el-table-column prop="name" width="300"> </el-table-column>
    <el-table-column prop="trackCount">
      <template slot-scope="scope"> {{ scope.row.trackCount }}首 </template>
    </el-table-column>
    <el-table-column prop="creator.nickname" class="nickname"></el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    playLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getPlayList(row) {
      this.$router.push({ path: "/songdetails", query: { id: row.id } });
    }
  }
};
</script>
<style lang="less">
// .el-table_3_column_11 {
//   .cell {
//     font-weight: bold;
//   }
// }
.el-table_3_column_12 {
  .cell {
    font-size: 13px;
    color: rgb(179, 179, 179);
  }
}
.el-table_3_column_13 {
  .cell {
    font-size: 14px;
    color: rgb(146, 143, 143);
  }
}
</style>