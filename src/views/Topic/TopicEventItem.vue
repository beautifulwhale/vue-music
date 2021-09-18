<template>
  <div class="eventitem">
    <div class="user-info">
      <div class="img">
        <img :src="eventItem.user.avatarUrl" />
      </div>
      <div class="name">
        <div class="nickname">{{ eventItem.user.nickname }}</div>
        <div class="time" @click="getEveryTopic()">{{ eventTime }}</div>
      </div>
    </div>
    <div class="event-desc">
      <div class="title">{{ eventMsg }}</div>
      <div
        class="songs"
        v-if="Object.keys(eventDesc).length !== 0"
        @click="getMusicPlay(eventDesc.song.id)"
      >
        <div class="img">
          <img :src="eventDesc.song.album.picUrl" />
        </div>
        <div class="info">
          <div class="songname">{{ eventDesc.song.name }}</div>
          <div class="artist">{{ eventDesc.song.artists[0].name }}</div>
        </div>
      </div>
    </div>
    <div class="dynamicImg">
      <div
        class="origin-img"
        v-for="(item, index) in eventItem.pics"
        :key="index"
      >
        <img :src="item.originUrl" />
      </div>
    </div>
    <div class="opertion">
      <span class="iconfont icon-zan">({{ eventItem.info.likedCount }})</span>
      <span class="iconfont icon-forward1"
        >({{ eventItem.info.shareCount }})</span
      >
      <span class="iconfont icon-huifu"
        >({{ eventItem.info.commentCount }})</span
      >
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
export default {
  props: {
    eventItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      eventDesc: {},
      eventMsg: ""
    };
  },
  methods: {
    getMusicPlay(id) {
      this.$bus.$emit("getMusic", id);
    }
  },
  computed: {
    eventTime() {
      return dateFormat(this.eventItem.eventTime);
    }
  },
  created() {
    this.eventDesc = JSON.parse(this.eventItem.json);
    this.eventMsg = this.eventDesc.msg;
  }
};
</script>
<style lang="less" scoped>
.eventitem {
  width: 1040px;
  margin-bottom: 30px;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 15px;
  .user-info {
    width: 1060px;
    height: 40px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    flex: 1;
    .img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .name {
      height: 40px;
      .nickname {
        color: rgb(177, 177, 248);
        font-size: 13px;
        margin-bottom: 10px;
      }
      .time {
        color: gainsboro;
        font-size: 12px;
      }
    }
  }
  .event-desc {
    width: 1020px;
    margin-left: 40px;
    margin-bottom: 20px;
    .title {
      color: black;
      font-size: 16px;
    }
    .songs {
      width: 1000px;
      height: 56px;
      background-color: whitesmoke;
      padding: 8px;
      margin-top: 10px;
      border-radius: 5px;
      cursor: pointer;
      .img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        float: left;
        img {
          width: 40px;
          height: 40px;
          border-radius: 5px;
        }
      }
      .info {
        width: 300px;
        height: 40px;
        .songname {
          margin-bottom: 5px;
          font-size: 13px;
        }
        .artist {
          font-size: 12px;
          color: gray;
        }
      }
    }
  }
  .dynamicImg {
    width: 340px;
    margin-left: 40px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .origin-img {
      margin-right: 5px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }
    }
  }
  .opertion {
    width: 1040px;
    height: 30px;
    line-height: 30px;
    display: flex;
    flex: 1;
    margin-top: 10px;
    margin-left: 850px;
    span {
      cursor: pointer;
      margin-right: 30px;
      font-size: 12px;
      color: gainsboro;
    }
  }
}
</style>