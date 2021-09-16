<template>
  <div class="video-filter">
    <el-button round @click="getAllLabel">{{ currentLabel }}</el-button>
    <div class="videocate">
      <div
        class="cateitem"
        v-for="item in videoCate"
        :style="item.name === sellectCate ? 'color:red' : ''"
        :key="item.id"
        @click="changeCate(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="label-detail" v-show="isShowAllLabel">
      <div class="title">
        <span>全部视频</span>
      </div>
      <div class="labelitems">
        <div class="labelitem" v-for="item in videoLabel" :key="item.id">
          <span
            class="item"
            @click="changeLabel(item)"
            :style="item.name === currentLabel ? 'color:red' : ''"
            >{{ item.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentLabel: "现场",
      isShowAllLabel: false,
      sellectCate: "现场"
    };
  },
  props: {
    videoLabel: {
      type: Array,
      default: () => []
    },
    videoCate: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getAllLabel() {
      this.isShowAllLabel = !this.isShowAllLabel;
    },
    changeLabel(item) {
      this.currentLabel = item.name;
      this.sellectCate = item.name;
      this.isShowAllLabel = false;
      this.$emit("getManyVideo", item.id);
    },
    changeCate(item) {
      this.currentLabel = item.name;
      this.sellectCate = item.name;
      this.$emit("getManyVideo", item.id);
    }
  }
};
</script>
<style lang="less" scoped>
.video-filter {
  width: 1160px;
  height: 30px;
  margin-left: 50px;
  position: relative;
  .el-button {
    float: left;
    margin-right: 300px;
  }
  .videocate {
    width: 700px;
    height: 20px;
    display: flex;
    flex: 1;
    align-items: center;
    .cateitem {
      width: 60px;
      height: 10px;
      margin-right: 10px;
      font-size: 12px;
      color: gainsboro;
    }
  }
  .label-detail {
    width: 618px;
    height: 520px;
    border: 1px solid gainsboro;
    margin-top: 5px;
    background-color: #fff;
    border-radius: 20px;
    position: fixed;
    top: 200px;
    left: 280px;
    z-index: 999;
    .title {
      width: 58 0px;
      height: 30px;
      margin: 0 auto;
      border-bottom: 1px solid gainsboro;
      color: black;
      font-size: 12px;
      line-height: 30px;
    }
    .labelitems {
      height: 470px;
      width: 600px;
      padding: 10px 20px 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .labelitem {
        width: 80px;
        height: 20px;
        .item {
          font-size: 12px;
        }
      }
    }
  }
}
</style>