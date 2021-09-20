<template>
  <div>
    <div class="title">
      <h3>独家放送<i class="el-icon-arrow-right"></i></h3>
    </div>
    <div class="mvlist">
      <div class="mv-item" v-for="(item, index) in exclusiveList" :key="index">
        <exclusive-item :exclusive-item="item"></exclusive-item>
      </div>
    </div>
  </div>
</template>
<script>
import ExclusiveItem from "@/views/Exclusive/ExclusiveItem";
import { getExclusiveList } from "../../network/recommed";
export default {
  data() {
    return {
      limit: 120,
      offset: 0,
      exclusiveList: []
    };
  },
  methods: {
    async ExclusiveList(limit, offset) {
      const res = await getExclusiveList(limit, offset);
      this.exclusiveList = res.result;
    }
  },
  created() {
    this.ExclusiveList(this.limit, this.offset);
  },
  components: {
    ExclusiveItem
  }
};
</script>
<style lang="less" scoped>
.title {
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
}
.mvlist {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .mv-item {
    margin-right: 15px;
    width: 380px;
    height: 180px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>