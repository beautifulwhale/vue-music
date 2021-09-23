<template>
  <div>
    <div class="singer-desc">
      <div class="img">
        <img :src="singerInfo.cover" />
      </div>
      <div class="info">
        <div class="name">
          <h2>{{ singerInfo.name }}</h2>
        </div>
        <div class="opertion">
          <el-button
            round
            size="mini"
            @click="collectClick(singerInfo.id, t)"
            v-if="isCollect"
          >
            <span class="el-icon-folder-checked"></span>
            已收藏
          </el-button>
          <el-button
            round
            size="mini"
            @click="collectClick(singerInfo.id, t)"
            v-else
          >
            <span class="el-icon-folder-add"></span>
            收藏
          </el-button>


          <el-button round size="mini" @click="getUser" v-if="singerId !== 0"
            ><span class="iconfont icon-weidenglu1-copy"></span
            >个人主页</el-button
          >
        </div>
        <div class="works">
          <span class="songs">单曲数:{{ songsTotal }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { collectSinger } from "../../network/singerdetails";
export default {
  props: {
    singerInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    songsTotal: {
      type: Number,
      default: 0
    },
    singerId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      t: 1
    };
  },
  computed: {
    isCollect() {
      if (JSON.parse(localStorage.getItem("collectSinger")) !== null) {
        let list = JSON.parse(localStorage.getItem("collectSinger"));
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
    getUser() {
      this.$router.push({ path: "/user", query: { id: this.singerId } });
    },
    async toCollectSinger(id, t) {
      const res = await collectSinger(id, t);
    },
    collectClick(id, t) {
      if (!this.isCollect) {
        this.t = 1;
        this.toCollectSinger(id, t);
        this.$message({ message: "恭喜您收藏成功", type: "success" });
        this.$router.go(0);
        let newlist = JSON.parse(localStorage.getItem("collectSinger")) || [];
        newlist.push(id);
        localStorage.setItem("collectSinger", JSON.stringify(newlist));
      } else {
        this.$confirm("确认不在收藏此专辑?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.t = 0;
            this.toCollectSinger(id, t);
            this.$router.go(0);
            let arr = JSON.parse(localStorage.getItem("collectSinger"));
            var len = arr.length;
            for (let i = 0; i < len; i++) {
              if (arr[i] == id) {
                arr.splice(i, 1);
              }
            }
            localStorage.setItem("collectSinger", JSON.stringify(arr));
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
<style lang="less" scoped>
.singer-desc {
  width: 1200px;
  height: 200px;
  margin-top: 80px;
  margin-bottom: 20px;
  display: flex;
  flex: 1;
  .img {
    width: 200px;
    height: 200px;
    margin-right: 20px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
  }
  .info {
    width: 1000px;
    height: 200px;
    .name {
      margin-bottom: 15px;
      color: black;
    }
    .operation {
      width: 1000px;
    }
    .works {
      margin-top: 20px;
      width: 1000px;
      height: 20px;
      .songs {
        font-size: 12px;
        margin-right: 20px;
      }
    }
  }
}
</style>