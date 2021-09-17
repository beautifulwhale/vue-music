<template>
  <div class="topicrank">
    <h3>话题飙升榜</h3>
    <el-table
      :data="TopicList"
      style="width: 100%"
      stripe
      @row-click="getTopicDetail"
    >
      <el-table-column width="50" class="number">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="sharePicUrl" width="60">
        <template slot-scope="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.sharePicUrl"
          >
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column width="988">
        <template slot-scope="scope">
          <div class="title">#{{ scope.row.title }}#</div>
          <div class="person">{{ scope.row.participateCount }}人参加</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="recom-topic">
      <recom-topic></recom-topic>
    </div>
  </div>
</template>
<script>
import RecomTopic from "@/views/Topic/RecomTopic";
import { getHotTopic } from "../../network/topic";
export default {
  data() {
    return {
      TopicInfo: {
        limit: 20,
        offset: 0
      },
      TopicList: []
    };
  },
  methods: {
    async getTopicRank(params) {
      const res = await getHotTopic(params.limit, params.offset);
      this.TopicList = res.hot;
    },
    getTopicDetail(row) {
      this.$router.push({ path: "/topicdetails", query: { id: row.actId } });
    }
  },
  created() {
    this.getTopicRank(this.TopicInfo);
  },
  components: {
    RecomTopic
  }
};
</script>
<style lang="less" scoped>
.topicrank {
  width: 1060px;
  height: 680px;
  border-right: 1px solid gainsboro;
  position: relative;
  h3 {
    margin-left: 30px;
    margin-top: 20px;
    color: black;
  }
  .el-image {
    border-radius: 10px;
  }
  .person {
    color: 13px;
    margin-top: 10px;
    color: gainsboro;
  }
  .recom-topic {
    position: absolute;
    right: -100px;
    top: 0px;
  }
}
</style>