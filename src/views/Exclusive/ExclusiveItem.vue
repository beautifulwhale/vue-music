<template>
  <div>
    <div class="img" @click="getMvPlay(exclusiveItem.id)">
      <img :src="exclusiveItem.picUrl" />
      <div class="bofang">
        <span class="iconfont icon-bofang1"></span>
      </div>
    </div>
    <div class="name">
      {{ exclusiveItem.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    exclusiveItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    getMvPlay(id) {
      this.$router.push({ path: "/videodetails", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 380px;
  height: 140px;
  position: relative;
  img {
    width: 380px;
    height: 140px;
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
</style>