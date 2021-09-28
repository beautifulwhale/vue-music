<template>
  <div class="avatar">
    <div class="avatarlist">
      <div class="avatar-item" v-for="(item, index) in likeList" :key="index">
        <img :src="item.avatarUrl" @click="getUser(item.userId)" />
        <div class="nickname" @click="getUser(item.userId)">
          {{ item.nickname }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    likeList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.avatar {
  width: 1200px;
  cursor: pointer;
  .avatarlist {
    width: 1200px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .avatar-item {
    width: 400px;
    height: 120px;
    flex: 1;
    margin-right: 100px;
    margin-bottom: 50px;
    display: flex;
    flex: 1;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      margin-right: 30px;
      border-radius: 50%;
    }
    .nickname {
      width: 120px;
      height: 120px;
      font-size: 13px;
      line-height: 120px;
    }
  }
}
</style>