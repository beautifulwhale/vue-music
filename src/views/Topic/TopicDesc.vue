<template>
  <div class="topic-desc">
    <div class="img">
      <img :src="topicDesc.coverPCUrl" />
      <div class="info">
        <div class="title">#{{ topicDesc.title }}#</div>
        <div class="person">{{ topicDesc.participateCount }}人参加</div>
        <el-button @click="partInIt"
          ><span><i class="el-icon-edit"></i>立即参与</span></el-button
        >
      </div>
    </div>
    <ul class="desc" v-for="(item, index) in topicDesc.text" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    topicDesc: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    partInIt(){
      this.$emit('partTopic');
    }
  },
};
</script>
<style lang="less" scoped>
.topic-desc {
  width: 1050px;
  margin-bottom: 30px;
  .img {
    width: 1050px;
    height: 220px;
    position: relative;
    img {
      width: 100%;
      height: 220px;
      border-radius: 10px;
    }
    .info {
      width: 200px;
      height: 160px;
      padding: 20px 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      margin: 0 auto;
      border-top: 2px solid rgb(202, 201, 201);
      .title {
        text-align: center;
        font-size: 18px;
        color: white;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .person {
        height: 20px;
        font-size: 10px;
        color: white;
        width: 100px;
        margin: 30px auto 10px;
      }
      .el-button {
        color: white;
        width: 200px;
        span {
          color: red;
        }
      }
    }
  }
  .desc {
    margin-top: 10px;
    margin-left: 10px;
  }
  ul {
    list-style-type: none;
  }
  ul li::before {
    content: "❁";
    color: red;
  }
}
</style>