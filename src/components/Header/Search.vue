<template>
  <el-input
    placeholder="音乐 / 歌手 / 歌单 / mv"
    v-model="searchContent"
    class="input-with-select"
  >
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</template>
<script>
export default {
    data() {
        return {
            searchContent:""
        }
    },
};
</script>
<style lang="less" scoped>
.el-input {
  width: 320px;
  margin-top: 22px;
  padding: 5px 5px;
}
</style>