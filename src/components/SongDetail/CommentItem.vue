<template>
  <div class="comment-item">
    <div class="avatar">
      <img :src="commentItem.user.avatarUrl" />
    </div>
    <div class="info">
      <div class="name">{{ commentItem.user.nickname }}</div>
      <div class="content">{{ commentItem.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.comment-item {
  width: 332px;
  height: 71px;
  display: flex;
  flex: 1;
  .avatar {
    margin-right: 15px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .info {
    .name {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .content {
      width: 250px;
      background-color: rgb(245, 245, 245);
      font-size: 13px;
      padding: 5px;
      max-height: 50px;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 3; /** 显示的行数 **/
      overflow: hidden;
    }
  }
}
</style>