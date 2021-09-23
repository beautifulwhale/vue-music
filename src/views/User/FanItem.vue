<template>
  <div class="fanitem">
    <div class="img" @click="getUser(fanItem.userId)">
      <img :src="fanItem.avatarUrl" alt="" />
      <div
        class="label"
        v-if="
          fanItem.avatarDetail && Object.keys(fanItem.avatarDetail).length !== 0
        "
      >
        <img :src="fanItem.avatarDetail.identityIconUrl" />
      </div>
    </div>
    <div class="user-info">
      <div class="name" @click="getUser(fanItem.userId)">
        {{ fanItem.nickname }}
      </div>
      <div class="desc">{{ fanItem.signature }}</div>
      <div class="count">
        <span>歌单: {{ fanItem.playlistCount }}</span>
        <el-divider direction="vertical"></el-divider>
        <span>粉丝: {{ fanItem.followeds }}</span>
      </div>
    </div>
    <div class="foucsbutton">
      <el-button round size="mini"
        ><span v-if="isMyFoucs" @click="followUsers"
          ><i class="el-icon-plus"></i>关注</span
        >
        <span v-else>已关注</span>
      </el-button>
    </div>
  </div>
</template>
<script>
import { followUser } from "../../network/user";
export default {
  props: {
    fanItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      t: 1,
      isMyFoucs: true
    };
  },
  methods: {
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
    },
    async followUser(id, t) {
      const res = await followUser(id, t);
    },
    followUsers() {
      this.followUser(this.fanItem.userId, this.t);
      this.isMyFoucs = false;
      this.$message({ message: "恭喜您成功的关注了~", type: "success" });
      localStorage.setItem("hasFollow", this.fanItem.userId);
    }
  },
  created() {
    this.$store.state.myFoucs.forEach(item => {
      if (item === this.fanItem.userId) {
        this.isMyFoucs = false;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.fanitem {
  width: 400px;
  height: 100px;
  display: flex;
  flex: 1;
  .img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .label {
      width: 25px;
      height: 25px;
      position: absolute;
      bottom: 5px;
      right: 0px;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .user-info {
    width: 200px;
    height: 200px;
    .name {
      margin-top: 20px;
      font-size: 14px;
      margin-bottom: 20px;
    }
    .desc {
      width: 200px;
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 5px;
    }
    .count {
      width: 200px;
      height: 15px;
      span {
        font-size: 11px;
        width: 50px;
        height: 15px;
      }
    }
  }
  .foucsbutton {
    line-height: 100px;
    i {
      color: red;
      margin-right: 5px;
    }
  }
}
</style>