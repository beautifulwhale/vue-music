<template>
  <div></div>
</template>
<script>
import {
  getRadioCate,
  getRadioRecom,
  getRadioBanner
} from "../../network/radio";
export default {
  data() {
    return {};
  },
  created() {
    this.getRadioRecom();
    this.getRadioCate();
    this.getRadioBanner();
  },
  methods: {
    async getRadioRecom() {
      const res = await getRadioRecom();
      console.log(res);
    },
    async getRadioCate() {
      const res = await getRadioCate();
      console.log(res);
    },
    async getRadioBanner() {
      const res = await getRadioBanner();
      console.log(res);
    }
  }
};
</script>
<style lang="less" scoped>
</style>