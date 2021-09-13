<template>
  <el-carousel :interval="4000" type="card" height="220px">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imageUrl" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { getBanner } from "../../network/recommed";
export default {
  data() {
    return {
      banners: [],
      type: 0
    };
  },
  created() {
    this.getBanner(this.type);
  },
  methods: {
    async getBanner(type) {
      const res = await getBanner(type);
      this.banners = res.banners;
    }
  }
};
</script>
<style lang="less" scoped>
.el-carousel {
  width: 1100px;
  height: 300px;
  margin-top: 100px;
  img {
    width: 100%;
    height: 220px;
    border-radius: 10px;
  }
}
.el-carousel__item {
  color: #475669;
  font-size: 14px;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>