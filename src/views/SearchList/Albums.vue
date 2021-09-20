<template>
  <el-table :data="albums" stripe style="width: 100%" @row-click="getAlbum">
    <el-table-column prop="picUrl" width="120">
      <template slot-scope="scope">
        <el-image style="width: 50px; height: 50px" :src="scope.row.picUrl">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </template>
    </el-table-column>
    <el-table-column prop="name" width="500"> </el-table-column>
    <el-table-column prop="artist.name"></el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    albums: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getAlbum(row) {
      this.$router.push({ path: "/ablumdetails", query: { id: row.id } });
    }
  }
};
</script>
<style lang="less" scoped>
</style>