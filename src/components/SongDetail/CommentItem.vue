<template>
  <div class="comment-item">
    <div class="avatar">
      <img :src="commentItem.user.avatarUrl" />
    </div>
    <div class="info">
      <div class="say">
      <div class="name">{{ commentItem.user.nickname }}:</div>
      <div class="content">{{ commentItem.content }}</div>
      </div>
      <div class="time">
        {{commentTime}}
      </div>
    </div>
  </div>
</template>
<script>
import {dateFormat} from '../../utils/utils'
export default {
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed:{
    commentTime(){
      return dateFormat(this.commentItem.time)
    }
  }
};
</script>
<style lang="less" scoped>
.comment-item {
  width: 1200px;
  height: 70px;
  border-bottom: 1px solid gainsboro;
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
    width: 1100px;
    height: 50px;
    .say{
      width: 1100px;
      .name {
        font-size: 12px;
        color: tomato;
        float: left;
        margin-right: 5px;
      }
      .content {
        width: 1100px;
        font-size: 12px;
      }
    }
    .time{
      margin-top: 10px;
      color: gray;
      font-size: 12px;
    }
  }
}
</style>