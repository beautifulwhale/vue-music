<template>
  <div class="radio-details">
    <top-info :radio-info="radioInfo"></top-info>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
        <span slot="label"
          ><h3>声音({{ total }})</h3></span
        >
        <div class="count">共{{ total }}期</div>
        <program :program-list="programList"></program>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"
          ><h3>收藏者({{ radioInfo.subCount }})</h3>
        </span>
        <collect-list :like-list="collectList"></collect-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {
  getRadioDetail,
  getProgram,
  getRadioCollect
} from "../../network/radio";
import TopInfo from "@/components/RadioDetails/TopInfo";
import Program from "@/views/RadioDetail/Program";
import CollectList from "@/components/SongDetail/CollectList";
export default {
  data() {
    return {
      radioId: 0,
      radioInfo: {},
      limit: 500,
      offset: 0,
      activeName: "first",
      total: 0,
      programList: [],
      time: -1,
      collectList: []
    };
  },
  created() {
    this.radioId = this.$route.query.id;
    this.getRadioDetail(this.radioId);
    this.getProgram(this.radioId, this.limit, this.offset);
    this.getRadioCollect(this.radioId, this.limit, this.time);
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
      this.$store.commit("getSongList", this.programList);
    },
    //获取电台的收藏者
    async getRadioCollect(id, limit, time) {
      const res = await getRadioCollect(id, limit, time);
      this.collectList = res.subscribers;
    },
    handleClick() {}
  },
  components: {
    TopInfo,
    Program,
    CollectList
  }
};
</script>
<style lang="less" scoped>
.count {
  font-size: 12px;
}
</style>