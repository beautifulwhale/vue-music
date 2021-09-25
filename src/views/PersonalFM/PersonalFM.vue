<template>
  <div class="personfm">
    <div class="personalitem" v-for="item in personList" :key="item.id">
      <personal-fm-item :fm-item="item"></personal-fm-item>
    </div>
  </div>
</template>
<script>
import { getPersonalFm } from "../../network/fm";
import PersonalFmItem from "@/views/PersonalFM/PersonalFmItem";
export default {
  data() {
    return {
      personList: [],
      currentIndex: 0,
      currentFm: {}
    };
  },
  created() {
    this.getPersonalFm();
  },
  methods: {
    async getPersonalFm() {
      const res = await getPersonalFm();
      this.personList = res.data;
      this.currentFm = this.personList[this.currentIndex];
      console.log(res);
      console.log(this.currentFm);
    }
  },
  components: {
    PersonalFmItem
  }
};
</script>
<style lang="less" scoped>
</style>