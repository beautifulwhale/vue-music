<template>
  <div class="father">
    <div class="title">
      <h3>编辑歌单详情</h3>
    </div>
    <div class="edit">
      <div class="info">
        <div class="name">
          <span>歌单名:</span>
          <el-input v-model="name"></el-input>
        </div>
        <div class="tagscontent">
          <span>标签:</span>
          <div class="tags">
            <div class="tagitem" v-for="(item, index) in tagsList" :key="index">
              <span>{{ item }}</span>
            </div>
            <span class="add" @click="addTags">添加标签</span>
          </div>
        </div>
        <div class="desc">
          <span>简介:</span>
          <el-input
            rows="5"
            type="textarea"
            v-model="description"
            maxlength="1000"
            show-word-limit
          >
          </el-input>
        </div>
        <div class="button">
          <el-button type="danger" round size="mini" @click="saveUpdate"
            >保存</el-button
          >
          <el-button round size="mini" @click="cancel">取消</el-button>
        </div>
      </div>
      <div class="img">
        <img :src="imgUrl" />
        <input
          id="file"
          type="file"
          name="filename"
          @change="changeFile($event)"
        />
      </div>
      <div class="cates" v-show="isShowTags">
        <div class="titles">
          <h3>添加标签</h3>
          <span class="el-icon-close" @click="closeTags"></span>
        </div>
        <div class="cateall">
          <div
            class="cate"
            v-for="(item, index) in cateList"
            :key="index"
            @click="chooseTag(item.name)"
          >
            <span :class="{ active: currentName === item.name }">{{
              item.name
            }}</span>
          </div>
        </div>
        <el-button type="danger" size="mini" round @click="complete"
          >完成</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { getPlayListDetails } from "../../network/songdetails";
import { getSongCategories } from "../../network/song";
import { updatePlayList } from "../../network/playlist";
import Cookies from "js-cookie";
var cookie = Cookies.get("userCookie");
import axios from "axios";
export default {
  data() {
    return {
      id: 0,
      playlist: {},
      name: "",
      tagsList: [],
      description: "",
      imgUrl: "",
      cateList: [],
      isShowTags: false,
      isChoose: false,
      currentName: "综艺",
      chooseArray: [],
      file: {}
    };
  },
  methods: {
    async getPlayListDetails(id) {
      const res = await getPlayListDetails(id);
      this.playlist = res.playlist;
      this.name = res.playlist.name;
      this.tagsList = res.playlist.tags;
      this.description = res.playlist.description;
      this.imgUrl = res.playlist.coverImgUrl;
    },
    async getSongCategories() {
      const res = await getSongCategories();
      this.cateList = res.sub;
    },
    async updatePlayList(id, name, desc, tags) {
      const res = await updatePlayList(id, name, desc, tags);
    },
    chooseTag(name) {
      this.currentName = name;
      this.chooseArray.push(name);
    },
    complete() {
      this.isShowTags = false;
      this.tagsList = this.chooseArray;
    },
    closeTags() {
      this.isShowTags = false;
    },
    addTags() {
      this.isShowTags = !this.isShowTags;
    },
    saveUpdate() {
      this.updatePlayList(this.id, this.name, this.description, this.tagsList);
      this.$router.push({ path: "/songdetails", query: { id: this.id } });
    },
    changeFile(e) {
      this.file = e.target.files[0];
      this.upload(this.file);
    },
    async upload(file) {
      let formData = new FormData();
      formData.append("imgFile", file);
      axios({
        method: "post",
        url: `http://localhost:3000/playlist/cover/update?time=${Date.now()}&cookie=${cookie}&id=${
          this.id
        }`,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      }).then(res => {
        this.imgUrl = res.data.url;
        this.$router.go(0);
      });
    },
    cancel() {
      this.$router.back();
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getPlayListDetails(this.id);
    this.getSongCategories();
  }
};
</script>
<style lang="less" scoped>
.father {
  width: 800px;
  height: 600px;
  .title {
    margin-top: 20px;
    margin-left: 20px;
    color: black;
    margin-bottom: 40px;
  }
  .edit {
    width: 800px;
    height: 350px;
    display: flex;
    flex: 1;
    margin-left: 20px;
    position: relative;
    .info {
      width: 500px;
      height: 350px;
      margin-right: 80px;
      .name {
        width: 500px;
        display: flex;
        flex: 1;
        align-items: center;
        margin-bottom: 20px;
        span {
          font-size: 15px;
          width: 70px;
        }
      }
      .tagscontent {
        width: 500px;
        display: flex;
        flex: 1;
        margin-bottom: 20px;
        span {
          width: 70px;
          font-size: 14px;
        }
        .tags {
          width: 430px;
          display: flex;
          flex: 1;
          .tagitem {
            margin-right: 10px;
            border-radius: 20px;
            border: 1px solid rgb(145, 144, 144);
            span {
              color: rgb(145, 144, 144);
              padding: 5px;
              font-size: 13px;
            }
          }
          .add {
            color: rgb(148, 148, 233);
            font-size: 13px;
          }
        }
      }
      .desc {
        width: 500px;
        margin-bottom: 20px;
        display: flex;
        flex: 1;
        span {
          width: 70px;
        }
      }
      .button {
        margin-left: 200px;
      }
      .el-button--danger {
        background-color: red;
        border-color: red;
      }
    }
    .img {
      width: 200px;
      height: 300px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 30px;
      }
      input {
        color: #fff;
      }
      .el-button {
        margin-left: 60px;
      }
    }
    .cates {
      width: 500px;
      height: 450px;
      position: absolute;
      top: 80px;
      left: 50px;
      background-color: #ffffff;
      overflow: scroll;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      .titles {
        margin-left: 200px;
        height: 30px;
        margin-bottom: 30px;
        margin-top: 20px;
        h3 {
          float: left;
          color: black;
          margin-right: 180px;
        }
        .el-icon-close {
          font-size: 25px;
        }
      }
      .cateall {
        width: 500px;
        height: 400px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        .cate {
          width: 60px;
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          font-size: 12px;
          .active {
            color: red;
          }
        }
      }
      .el-button {
        margin-top: 20px;
        margin-left: 200px;
      }
    }
  }
}
</style>