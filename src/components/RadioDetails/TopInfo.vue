<template>
  <div class="details-top">
    <div class="avatar">
      <img :src="radioInfo.picUrl" />
    </div>
    <div class="content" v-if="Object.keys(radioInfo).length !== 0">
      <div class="title">
        <span>播客</span>
        <h2>{{ radioInfo.name }}</h2>
      </div>
      <!-- 作者 -->
      <div class="creator">
        <div class="imghead">
          <img
            :src="radioInfo.dj.avatarUrl"
            @click="getUser(radioInfo.dj.userId)"
          />
        </div>
        <div class="nickname" @click="getUser(radioInfo.dj.userId)">
          {{ radioInfo.dj.nickname }}
        </div>
      </div>
      <!-- 播放/收藏/分享 -->
      <div class="operation">
        <el-button type="danger" round size="mini">
          <span class="iconfont icon-bofang1"></span>
          播放全部
        </el-button>
        <!-- <el-button
          round
          size="mini"
          @click="collectClick(radioInfo.id, t)"
          v-if="isCollect"
        >
          <span class="el-icon-folder-checked"></span>
          已收藏({{ radioInfo.subscribedCount }})
        </el-button> -->
        <el-button round size="mini">
          <span class="el-icon-folder-add"></span>
          收藏({{ radioInfo.subCount }})
        </el-button>

        <el-button round size="mini">
          <span class="iconfont icon-fenxiang2"></span>
          分享({{ radioInfo.shareCount }})
        </el-button>
      </div>
      <!-- 描述 -->
      <div class="desc">
        <span>{{ radioInfo.category }}</span>
        <div class="descontent">{{ radioInfo.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    radioInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.details-top {
  width: 1200px;
  height: 230px;
  margin-top: 10px;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  .avatar {
    margin-right: 30px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .content {
    width: 700px;
    height: 160px;
    flex-flow: column;
    .title {
      width: 500px;
      span {
        border: 1px solid red;
        padding: 3px;
        color: red;
        float: left;
        font-size: 13px;
        margin-right: 10px;
        border-radius: 3px;
      }
      h2 {
        color: black;
        margin-right: 5px;
      }

      margin-bottom: 10px;
    }
    .creator {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      .nickname {
        font-size: 13px;
        color: rgb(133, 133, 241);
        cursor: pointer;
      }
      .imghead {
        margin-right: 10px;
        cursor: pointer;
        img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }
      }
      .create-time {
        margin-left: 20px;
        font-size: 13px;
        color: gray;
      }
    }
    .operation {
      margin-bottom: 15px;
    }
    .el-button--danger {
      background-color: red;
      border-color: red;
    }
    .desc {
      width: 950px;
      height: 50px;
      span {
        color: red;
        font-size: 10px;
        border: 1px solid red;
        padding: 2px;
        margin-right: 5px;
        float: left;
        border-radius: 3px;
      }
      .descontent {
        font-size: 13px;
      }
    }
  }
}
</style>