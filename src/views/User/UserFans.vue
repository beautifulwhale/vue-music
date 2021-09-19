<template>
  <div class="foucs">
    <div class="title">
      <h3>{{ username }}的粉丝</h3>
    </div>
    <div class="foucs-item" v-for="item in userFansList" :key="item.userId">
      <fan-item :fan-item="item"></fan-item>
    </div>
    <!-- 分页 -->
    <div class="pagination" v-if="total > 48">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import FanItem from "@/views/User/FanItem";
import { getUserFans } from "../../network/user";
export default {
  data() {
    return {
      username: "",
      userFansList: [],
      queryInfo: {
        userId: 0,
        limit: 48,
        offset: 0
      },
      currentPage: 1,
      pageSize: 50,
      total: 0
    };
  },
  methods: {
    //获取用户关注的人
    async getUserFans(params) {
      const res = await getUserFans(
        params.userId,
        params.limit,
        params.offset
      );
      this.userFansList = res.followeds;
      console.log(res)
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.queryInfo.offset = (this.currentPage - 1) * this.queryInfo.limit;
      this.getUserFans(this.queryInfo);
    }
  },
  created() {
    this.queryInfo.userId = this.$route.query.id;
    this.username = this.$route.query.nickname;
    this.total = Number(this.$route.query.followeds);
    this.getUserFans(this.queryInfo);
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
  .pagination {
    width: 554px;
    height: 32px;
    margin: 20px auto;
  }
}
</style>