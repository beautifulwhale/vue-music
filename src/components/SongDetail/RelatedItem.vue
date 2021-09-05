<template>
  <div class="relate" @click="relateClick(relatedItem.id)">
    <div class="avatar">
      <img :src="relatedItem.coverImgUrl" />
    </div>
    <div class="name">
      <div class="songname">{{ relatedItem.name }}</div>
      <div class="nickname">{{ relatedItem.creator.nickname }}</div>
    </div>
  </div>
</template>
<script>
import { getPlayListDetails } from "../../network/songdetails";
export default {
  props: {
    relatedItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    relateClick(id) {
      this.$router.push({
        path: "/songdetails",
        query: {
          id: id
        }
      });
    }
  },
   
//   beforeRouteUpdate(to, from, next) {
//     // to：目标路由对象
//     // from：原路由对象
//     // next：可指定路由进行跳转
//     next();
//     this.getPlayListDetails(to.query.id); //查询数据
//   }
};
</script>
<style lang="less" scoped>
.relate {
  width: 310px;
  height: 54px;
  margin: 15px;
  cursor: pointer; 
  .avatar {
    width: 50px;
    margin-right: 15px;
    float: left;
    img {
      width: 50px;
      height: 54px;
      border-radius: 10px;
    }
  }
  .name {
    height: 54px;
    width: 240px;
    margin-left: 60px;
    .songname {
      font-weight: bold;
      margin-bottom: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .nickname {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>