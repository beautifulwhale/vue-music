<template>
  <el-table
    :data="users"
    stripe
    style="width: 100%"
    @row-click="getUserMessage"
  >
    <el-table-column prop="avatarUrl" width="100">
      <template slot-scope="scope">
        <el-image style="width: 80px; height: 80px" :src="scope.row.avatarUrl">
        </el-image>
      </template>
    </el-table-column>
    <el-table-column prop="nickname" width="600"> </el-table-column>
    <el-table-column prop="signature"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getUserMessage(row) {
      this.$router.push({ path: "/user", query: { id: row.userId } });
    }
  }
};
</script>
<style lang="less" scoped>
.el-image {
  border-radius: 50%;
}
</style>