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
  width: 400px;
  height: 200px;
  margin-right: 50px;
  margin-top: 30px;
  cursor: pointer; 
  .avatar {
    width: 150px;
    height: 150px;
    margin-right: 15px;
    float: left;
    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
  }
  .name {
    height: 150px;
    width: 250px;
    margin-left: 160px;
    .songname {
      font-weight: bold;
      margin-bottom: 15px;
      // text-overflow: ellipsis;
      // overflow: hidden;
      // white-space: nowrap;
    }
    .nickname {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>