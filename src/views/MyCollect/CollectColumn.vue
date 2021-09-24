<template>
  <div class="column">
    <div class="title">
      <h3>收藏的专栏</h3>
      <span>({{ total }})</span>
    </div>
    <el-table :data="columnList" stripe style="width: 100%">
      <el-table-column width="120">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 50px"
            :src="scope.row.rectanglePicUrl"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="title"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="name">by{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="read">阅读:{{ scope.row.readCount }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { collectColumn } from "../../network/video";
export default {
  data() {
    return {
      columnList: [],
      total: 0
    };
  },
  methods: {
    async getMyColumn() {
      const res = await collectColumn();
      this.columnList = res.data;
      this.total = res.count;
      console.log(res);
    }
  },
  created() {
    this.getMyColumn();
  }
};
</script>
<style lang="less" scoped>
.column {
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
}
.read,
.name {
  font-size: 12px;
  color: rgb(182, 182, 182);
}
</style>