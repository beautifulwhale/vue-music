<template>
  <div>
    <div class="info">
      <div class="cover">
        <div class="img">
          <img :src="fmItem.album.picUrl" />
        </div>
        <div class="opertion">
        </div>
      </div>
    </div>
    <div class="comment"></div>
  </div>
</template>
<script>
export default {
  props: {
    fmItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
img{
  width: 200px;
  height: 200px;
}
</style>