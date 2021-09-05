<template>
  <div>
    <el-table :data="songList" style="width: 100%" stripe>
      <el-table-column label="序号">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌曲" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="ar[0].name"
        label="歌手"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="al.name"
        label="专辑"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column prop="dt" label="时长" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{ getTime(scope.row.dt / 1000) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { FormatTime } from "../../utils/utils";
export default {
  props: {
    songList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getTime(dt) {
      return FormatTime(dt);
    }
  }
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 14px;
}
</style>