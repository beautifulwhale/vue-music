<template>
  <div class="details-top">
    <div class="avatar">
      <img :src="songDetailsTop.coverImgUrl" />
    </div>
    <div class="content" v-if="Object.keys(songDetailsTop).length !== 0">
      <div class="title">
        <h2>{{ songDetailsTop.name }}</h2>
        <span
          class="el-icon-edit-outline"
          v-if="songDetailsTop.userId === 3243961585"
          @click="editPlayList(songDetailsTop.id)"
        ></span>
        <span
          class="el-icon-delete"
          v-if="songDetailsTop.userId === 3243961585"
          @click="goDeletePlayList(songDetailsTop.id)"
        ></span>
      </div>
      <!-- 作者 -->
      <div class="creator">
        <div class="imghead">
          <img :src="creator.avatarUrl" @click="getUser(creator.userId)" />
        </div>
        <div class="nickname" @click="getUser(creator.userId)">
          {{ creator.nickname }}
        </div>
        <div class="create-time">{{ createTime }} 创建</div>
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
          @click="collectClick(songDetailsTop.id, t)"
          v-if="isCollect"
        >
          <span class="el-icon-folder-checked"></span>
          已收藏({{ songDetailsTop.subscribedCount }})
        </el-button>
        <el-button
          round
          size="mini"
          @click="collectClick(songDetailsTop.id, t)"
          v-else
        >
          <span class="el-icon-folder-add"></span>
          收藏({{ songDetailsTop.subscribedCount }})
        </el-button>

        <el-button round size="mini">
          <span class="iconfont icon-fenxiang2"></span>
          分享({{ songDetailsTop.shareCount }})
        </el-button>
      </div>
      <!-- 标签 -->
      <div class="tags" v-if="songDetailsTop.tags.length !== 0">
        <span>标签:</span>
        <div class="tag-item" v-for="item in songDetailsTop.tags" :key="item">
          {{ item }}
        </div>
      </div>
      <!-- 描述 -->
      <div class="desc">
        <span>描述:</span>
        <p>{{ songDetailsTop.description }}</p>
      </div>
      <span class="content-toggle" @click="toggleDescClick"
        >{{ contentToggle }}...</span
      >
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
import { mapState } from "vuex";
import { collectPlayList } from "../../network/songdetails";
import { deletePlayList } from "../../network/playlist";
export default {
  name: "DetailTop",
  props: {
    songDetailsTop: {
      type: Object,
      default: () => ({})
    },
    creator: {
      type: Object
    },
    contentToggle: {
      type: String
    }
  },
  data() {
    return {
      t: 1
    };
  },
  computed: {
    ...mapState(["songList"]),
    createTime() {
      return dateFormat(this.songDetailsTop.createTime, "YYYY-MM-DD");
    },
    isCollect() {
      if (JSON.parse(localStorage.getItem("collectPlayList")) !== null) {
        let list = JSON.parse(localStorage.getItem("collectPlayList"));
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
    toggleDescClick() {
      this.$emit("toggleDescClick");
    },
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
    },
    //收藏歌单
    async getcollectPlayList(id, t) {
      const res = await collectPlayList(id, t);
    },
    //删除歌单
    async deletePlayList(id) {
      const res = await deletePlayList(id);
      console.log(res);
    },
    //收藏mv
    collectClick(id, t) {
      if (!this.isCollect) {
        this.t = 1;
        this.getcollectPlayList(id, t);
        this.$message({ message: "恭喜您收藏成功", type: "success" });
        this.$router.go(0);
        let newlist = JSON.parse(localStorage.getItem("collectPlayList")) || [];
        newlist.push(id);
        localStorage.setItem("collectPlayList", JSON.stringify(newlist));
      } else {
        this.$confirm("确认不在收藏此歌单?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.t = 2;
            this.getcollectPlayList(id, t);
            this.$router.go(0);
            let arr = JSON.parse(localStorage.getItem("collectPlayList"));
            var len = arr.length;
            for (let i = 0; i < len; i++) {
              if (arr[i] == id) {
                arr.splice(i, 1);
              }
            }
            localStorage.setItem("collectPlayList", JSON.stringify(arr));
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
    },
    //编辑歌单
    editPlayList(id) {
      this.$router.push({
        path: "/editplayList",
        query: { id }
      });
    },
    //删除创建的歌单
    goDeletePlayList(id) {
      this.$confirm("此操作将永久删除该歌单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deletePlayList(id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less">
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
      display: flex;
      flex: 1;
      h2 {
        color: black;
        margin-right: 5px;
      }
      .el-icon-edit-outline {
        font-size: 25px;
        color: rgb(161, 161, 161);
      }
      .el-icon-delete {
        font-size: 20px;
        color: rgb(141, 141, 141);
        margin-left: 200px;
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
    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
        font-weight: bold;
      }
      .tag-item {
        font-size: 12px;
        color: grey;
        height: 20px;
        padding: 0 5px;
        line-height: 20px;
        text-align: center;
        margin-right: 5px;
        border: 1px solid gray;
        border-radius: 5px;
      }
    }
    .desc {
      max-height: 30px;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 3; /** 显示的行数 **/
      overflow: hidden;
      span {
        font-size: 13px;
        margin-right: 3px;
        float: left;
      }
      p {
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
    .content-toggle {
      font-size: 13px;
      color: grey;
    }
  }
}
</style>