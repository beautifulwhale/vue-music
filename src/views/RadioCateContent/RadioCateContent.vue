<template>
  <div class="content">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <el-tabs>
      <el-tab-pane>
        <span slot="label"
          ><el-button round size="mini" type="danger">推荐</el-button>
        </span>
        <div class="hot-radio">
          <div class="hot-item" v-for="item in recommendList" :key="item.id">
            <content-item :content-item="item"></content-item>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"
          ><el-button round size="mini" type="danger">热门</el-button>
        </span>
        <div class="hot-radio">
          <div class="hot-item" v-for="item in hotRadioList" :key="item.id">
            <content-item :content-item="item"></content-item>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ContentItem from "@/views/RadioCateContent/ContentItem";
import { getCateRecommend, getCateHot } from "../../network/radio";
export default {
  data() {
    return {
      title: "",
      type: 0,
      limit: 200,
      offset: 0,
      cateId: 0,
      hotRadioList: [],
      recommendList: []
    };
  },
  created() {
    this.type = this.$route.query.id;
    this.cateId = this.$route.query.id;
    this.title = this.$route.query.name;
    this.getCateRecommend(this.type);
    this.getCateHot(this.limit, this.offset, this.cateId);
  },
  methods: {
    async getCateRecommend(type) {
      const res = await getCateRecommend(type);
      this.recommendList = res.djRadios;
    },
    async getCateHot(limit, offset, cateId) {
      const res = await getCateHot(limit, offset, cateId);
      this.hotRadioList = res.djRadios;
      console.log(res)
    }
  },
  components: {
    ContentItem
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 1200px;
  .title {
    margin: 20px 0 10px 20px;
    color: black;
  }
  .el-tabs {
    margin-left: 20px;
  }
  .hot-radio {
    width: 1200px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .hot-item {
      width: 600px;
      height: 150px;
      margin-bottom: 20px;
    }
  }
}
.el-button--danger {
  background-color: red;
  border-color: red;
}
</style>