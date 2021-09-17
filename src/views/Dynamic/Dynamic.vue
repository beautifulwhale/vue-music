<template>
  <div class="dynamic">
    <div class="title">
      <h3>动态</h3>
      <el-button type="danger" size="mini"
        ><i class="el-icon-plus"></i>写动态</el-button
      >
    </div>
    <div class="rightmessage">
      <div class="userinfo">
        <div class="usertitle">
          <img :src="avatarUrl" />
          <span>{{ nickname }}</span>
        </div>
        <div class="userlike">
          <div class="dynamicnumber">
            <div class="number">1</div>
            <div class="dyma">动态</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="guanzhu">
            <div class="number">1</div>
            <div class="guan">关注</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="fans">
            <div class="number">1</div>
            <div class="fan">粉丝</div>
          </div>
        </div>
      </div>
      <div class="hottopic">
          <hot-topic :hot-topic='hotTopicList'></hot-topic>
      </div>
    </div>
  </div>
</template>
<script>
import HotTopic from '@/views/Topic/HotTopic'
import { getHotTopic } from "../../network/topic";
export default {
  data() {
    return {
      avatarUrl: "",
      nickname: "",
      hotTopicInfo: {
        limit: 5,
        offset: 0
      },
      hotTopicList: []
    };
  },
  methods: {
    async getHotTopic(params) {
      const res = await getHotTopic(params.limit, params.offset);
      this.hotTopicList = res.hot;
    }
  },
  created() {
    this.avatarUrl = window.localStorage.getItem("avatarUrl");
    this.nickname = window.localStorage.getItem("nickname");
    this.getHotTopic(this.hotTopicInfo);
  },
  components:{
      HotTopic
  }
};
</script>
<style lang="less" scoped>
.dynamic {
  width: 1050px;
  height: 700px;
  border-right: 1px solid gainsboro;
  padding: 20px 0;
  position: relative;
  .title {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    width: 1050px;
    height: 30px;
    h3 {
      color: black;
    }
    .el-button {
      border-radius: 20px;
    }
    .el-button--danger {
      background-color: red;
      border-color: red;
    }
  }
  .rightmessage {
    width: 250px;
    height: 600px;
    position: absolute;
    right: -250px;
    top: 0px;
    .userinfo {
      width: 250px;
      height: 150px;
      padding: 30px 0px 10px 20px;
      background-color: whitesmoke;
      .usertitle {
        width: 250px;
        height: 50px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          float: left;
          margin-right: 10px;
        }
        span {
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .userlike {
        width: 200px;
        height: 40px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        flex: 1;
        cursor: pointer;
        .number {
          text-align: center;
          margin-bottom: 10px;
        }
        .el-divider--vertical {
          height: 40px;
        }
      }
    }
    .hottopic{
        width: 250px;
        height: 500px;
    }
  }
}
</style>