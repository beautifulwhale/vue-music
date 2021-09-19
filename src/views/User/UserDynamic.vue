<template>
  <div class="dynamic">
    <div class="title">
      <h3>{{ username }}的动态</h3>
    </div>
    <div class="event-items">
      <div class="event-item" v-for="item in dynamicList" :key="item.id">
        <topic-event-item :event-item="item"></topic-event-item>
      </div>
    </div>
    <!-- 分页 -->
    <div class="pagination" v-if="dynamicList.length > 50">
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
import TopicEventItem from "@/views/Topic/TopicEventItem";
import { getUserDynamic } from "../../network/user";
export default {
  data() {
    return {
      dynamicList: [],
      queryInfo: {
        userId: 0,
        limit: 50,
        lasttime: -1
      },
      currentPage: 1,
      pageSize: 50,
      total: 0
    };
  },
  methods: {
    async getUserDynamic(params) {
      const res = await getUserDynamic(
        params.userId,
        params.limit,
        params.lasttime
      );
      this.dynamicList = res.events;
      this.queryInfo.lasttime = res.lasttime;
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.getUserDynamic(this.queryInfo);
    }
  },
  created() {
    this.queryInfo.userId = this.$route.query.id;
    this.username = this.$route.query.nickname;
    this.total = Number(this.$route.query.eventCount);
    this.getUserDynamic(this.queryInfo);
  },
  components: {
    TopicEventItem
  }
};
</script>
<style lang="less" scoped>
.dynamic {
  width: 1060px;
  margin-top: 20px;
  .title {
    margin-bottom: 20px;
    margin-left: 20px;
    h3 {
      color: black;
    }
  }
  .pagination {
    width: 554px;
    height: 32px;
    margin: 20px auto;
    ::v-deep {
      .el-pagination.is-background .el-pager li:not(.disabled) {
        background-color: #fff; // 进行修改未选中背景和字体
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: red; // 进行修改选中项背景和字体
        color: #fff;
      }
    }
  }
}
</style>