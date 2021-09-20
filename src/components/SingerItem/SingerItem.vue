<template>
  <div class="singeritem" @click="singerDetails(singerItem.id)">
    <div class="avator">
      <img :src="singerItem.picUrl" />
      <div class="name">{{ singerItem.name }}</div>
    </div>
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
  width: 170px;
  height: 190px;
  display: flex;
  flex: 1;
  cursor: pointer;
  .avator {
    width: 170px;
    height: 190px;
    margin-bottom: 10px;
    img {
      width: 170px;
      height: 170px;
      border-radius: 10px;
    }
  .name {
    color: black;
  }
  }
}
</style>