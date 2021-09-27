<template>
  <div class="radio">
    <div class="title" @click="getRadioContent">
      <h3>{{ name }}<i class="el-icon-arrow-right"></i></h3>
    </div>
    <div class="radioall">
      <div class="radio-item" v-for="item in hotRadioList" :key="item.id">
        <radio-item :radio-item="item"></radio-item>
      </div>
    </div>
  </div>
</template>
<script>
import RadioItem from "@/components/RadioList/RadioItem";
import { getCateHot } from "../../network/radio";
export default {
  data() {
    return {
      hotRadioList: [],
      limit: 7,
      offset: 5,
      cateId: 11,
      name: "知识"
    };
  },
  created() {
    this.getCateHot(this.limit, this.offset, this.cateId);
  },
  methods: {
    async getCateHot(limit, offset, cateId) {
      const res = await getCateHot(limit, offset, cateId);
      this.hotRadioList = res.djRadios;
    },
    getRadioContent() {
      this.$router.push({
        path: "/radiocatecontent",
        query: { id: this.cateId, name: this.name }
      });
    }
  },
  components: {
    RadioItem
  }
};
</script>
<style lang="less" scoped>
.radio {
  width: 1200px;
  .title {
    color: black;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .radioall {
    width: 1200px;
    display: flex;
    flex: 1;
    .radio-item {
      margin-right: 10px;
    }
  }
}
</style>