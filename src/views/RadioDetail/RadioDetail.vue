<template>
  <div class="radio-details">
    <top-info :radio-info="radioInfo"></top-info>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
        <span slot="label"
          ><h3>声音({{ total }})</h3></span
        >
        <program :program-list="programList"></program>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"><h3>收藏者(100)</h3></span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getRadioDetail, getProgram } from "../../network/radio";
import TopInfo from "@/components/RadioDetails/TopInfo";
import Program from "@/views/RadioDetail/Program";
export default {
  data() {
    return {
      radioId: 0,
      radioInfo: {},
      limit: 100,
      offset: 0,
      activeName: "first",
      total: 0,
      programList: []
    };
  },
  created() {
    this.radioId = this.$route.query.id;
    this.getRadioDetail(this.radioId);
    this.getProgram(this.radioId, this.limit, this.offset);
  },
  methods: {
    //获取电台的详细信息
    async getRadioDetail(id) {
      const res = await getRadioDetail(id);
      this.radioInfo = res.data;
    },
    //获取电台的节目
    async getProgram(id, limit, offset) {
      const res = await getProgram(id, limit, offset);
      this.programList = res.programs;
      this.total = res.count;
    },
    handleClick() {}
  },
  components: {
    TopInfo,
    Program
  }
};
</script>
<style lang="less" scoped>
</style>