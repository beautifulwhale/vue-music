<template>
  <div class="details-top">
    <div class="avatar">
      <div class="bottom"></div>
      <img :src="albumTop.picUrl" />
    </div>
    <div class="content" v-if="Object.keys(albumTop).length !== 0">
      <div class="title">
        <div class="zuanji"><span>专辑</span></div>
        <h2>{{ albumTop.name }}</h2>
      </div>
      <!-- 播放/收藏/分享 -->
      <div class="operation">
        <el-button
          type="danger"
          round
          size="mini"
          @click="playAll(songList[0].id)"
        >
          <span class="iconfont icon-bofang1"></span>
          播放全部
        </el-button>
        <el-button
          round
          size="mini"
          @click="collectClick(albumTop.id, t)"
          v-if="isCollect"
        >
          <span class="el-icon-folder-checked"></span>
          已收藏
        </el-button>
        <el-button
          round
          size="mini"
          @click="collectClick(albumTop.id, t)"
          v-else
        >
          <span class="el-icon-folder-add"></span>
          收藏
        </el-button>
        <el-button round size="mini">
          <span class="iconfont icon-fenxiang2"></span>
          分享({{ albumTop.info.shareCount }})
        </el-button>
      </div>
      <!-- 作者 -->
      <div class="creator">
        <div class="nickname" @click="getSinger(albumTop.artist.id)">
          歌手:{{ albumTop.artist.name }}
        </div>
        <div class="create-time">时间:{{ publishTime }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
import { mapState } from "vuex";
import { collectAlbum } from "../../network/album";
export default {
  name: "DetailTop",
  props: {
    albumTop: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      t: 1
    };
  },
  computed: {
    ...mapState(["songList"]),
    publishTime() {
      return dateFormat(this.albumTop.publishTime, "YYYY-MM-DD HH-MM-SS");
    },
    isCollect() {
      if (JSON.parse(localStorage.getItem("hasCollect")) !== null) {
        let list = JSON.parse(localStorage.getItem("hasCollect"));
        let key = list.indexOf(Number(this.$route.query.id), 0);
        if (key === -1) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    },
    getSinger(id) {
      this.$router.push({ path: "/singerdetails", query: { id: id } });
    },
    async collectAlbum(id, t) {
      const res = await collectAlbum(id, t);
    },
    collectClick(id, t) {
      if (!this.isCollect) {
        this.t = 1;
        this.collectAlbum(id, t);
        this.$message({ message: "恭喜您收藏成功", type: "success" });
        this.$router.go(0);
        let newlist = JSON.parse(localStorage.getItem("hasCollect")) || [];
        newlist.push(id);
        localStorage.setItem("hasCollect", JSON.stringify(newlist));
      } else {
        this.$confirm("确认不在收藏此专辑?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.t = 0;
            this.collectAlbum(id, t);
            this.$router.go(0);
            let arr = JSON.parse(localStorage.getItem("hasCollect"));
            var len = arr.length;
            for (let i = 0; i < len; i++) {
              if (arr[i] == id) {
                arr.splice(i, 1);
              }
            }
            localStorage.setItem("hasCollect", JSON.stringify(arr));
            this.$message({
              type: "success",
              message: "删除收藏成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除收藏"
            });
          });
      }
    }
  }
};
</script>
<style lang="less">
.details-top {
  width: 1200px;
  height: 230px;
  margin-top: 70px;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  .avatar {
    width: 200px;
    height: 200px;
    margin-right: 30px;
    position: relative;
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
      color: black;
      margin-bottom: 20px;
      .zuanji {
        width: 50px;
        height: 30px;
        text-align: center;
        float: left;
        margin-right: 10px;
        padding: 5px;
        border: 1px solid red;
        border-radius: 5px;
        span {
          color: red;
        }
      }
    }
    .creator {
      margin-bottom: 10px;
      .nickname {
        font-size: 13px;
        color: black;
        cursor: pointer;
        margin-bottom: 20px;
      }
      .create-time {
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
  }
}
</style>