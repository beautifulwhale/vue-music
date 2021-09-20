<template>
  <div>
    <div class="title" @click="getMoreMv">
      <h3>独家放送<i class="el-icon-arrow-right"></i></h3>
    </div>
    <div class="exclusive">
      <div
        class="exclusive-item"
        v-for="item in exclusiveList"
        :key="item.id"
        @click="getMvPlay(item.id)"
      >
        <div class="img">
          <img :src="item.sPicUrl" />
          <div class="bofang">
            <span class="iconfont icon-bofang1"></span>
          </div>
        </div>
        <div class="name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    exclusiveList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getMvPlay(id) {
      this.$router.push({ path: "/videodetails", query: { id: id } });
    },
    getMoreMv() {
      this.$router.push("/exclusive");
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  margin-bottom: 20px;
  color: black;
  margin-left: 20px;
  margin-top: 50px;
  cursor: pointer;
}
.exclusive {
  width: 1200px;
  display: flex;
  flex: 1;
  margin-left: 20px;
  .exclusive-item {
    width: 380px;
    height: 240px;
    margin-right: 15px;
    cursor: pointer;
    .img {
      width: 380px;
      height: 200px;
      position: relative;
      img {
        width: 380px;
        height: 200px;
        border-radius: 10px;
      }
      .bofang {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.1);
        padding-left: 5px;
        padding-top: 3px;
        span {
          color: white;
          font-size: 14px;
        }
      }
    }
    .name {
      width: 380px;
      height: 40px;
      margin-top: 10px;
    }
  }
}
</style>