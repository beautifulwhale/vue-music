<template>
  <div class="foucs">
    <div class="title"><h3>hhh的关注</h3></div>
    <div class="foucs-item" v-for="item in userFoucsList" :key="item.userId">
      <fan-item :fan-item="item"></fan-item>
    </div>
  </div>
</template>
<script>
import FanItem from "@/views/User/FanItem";
import { getUserFoucs } from "../../network/user";
export default {
  data() {
    return {
      userId: 0,
      userFoucsList: []
    };
  },
  methods: {
    //获取用户关注的人
    async getUserFoucs(id) {
      const res = await getUserFoucs(id);
      this.userFoucsList = res.follow;
      console.log(res);
    }
  },
  created() {
    this.userId = this.$route.query.id;
    this.getUserFoucs(this.userId);
  },
  components: {
    FanItem
  }
};
</script>
<style lang="less" scoped>
.foucs {
  width: 1260px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .title {
    width: 1200px;
    height: 30px;
    margin: 20px 0 30px 20px;
    h3 {
      color: black;
    }
  }
  .foucs-item {
    width: 400px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 40px;
  }
}
</style>