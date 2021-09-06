<template>
  <div class="singeritem" @click="singerDetails(singerItem.id)">
    <div class="avator">
      <img :src="singerItem.picUrl" />
    </div>
    <div class="name">{{ singerItem.name }}</div>
    <div class="music-size">单曲:{{ singerItem.musicSize }}</div>
  </div>
</template>
<script>
export default {
  props: {
    singerItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    singerDetails(id) {
      this.$router.push({ path: "/singerdetails", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.singeritem {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  .avator {
    width: 100px;
    height: 100px;
    img {
      border-radius: 50%;
      box-shadow: 0 0 6px #000;
      width: 100px;
      height: 100px;
    }
  }
  .name {
    color: gray;
  }
  .music-size {
    color: rgb(240, 96, 96);
    font-size: 13px;
    font-weight: bolder;
  }
}
</style>