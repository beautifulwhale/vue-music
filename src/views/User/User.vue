<template>
  <div class="user">
    <user-info :user-info="userInfo"></user-info>
  </div>
</template>
<script>
import UserInfo from "@/views/User/UserInfo";
import { getUserDetail } from "../../network/user";
export default {
  data() {
    return {
      userId: 0,
      userInfo: {}
    };
  },
  methods: {
    //获取用户详细信息
    async getUserDetail(id) {
      const res = await getUserDetail(id);
      this.userInfo = res;
    }
  },
  created() {
    this.userId = this.$route.query.id;
    this.getUserDetail(this.userId);
  },
  components: {
    UserInfo
  }
};
</script>
<style lang="less" scoped>
.user {
  width: 1260px;
}
</style>