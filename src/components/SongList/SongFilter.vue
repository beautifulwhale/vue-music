<template>
  <div class="song-filter">
    <div class="allcat" @click="catClick">
      <span>{{ currentTitle }}</span>
      <i class="iconfont icon-daosanjiao"></i>
    </div>
    <div class="hotlabel">
      <span
        v-for="(item, index) in hotSongCategories"
        :key="index"
        @click="hotClick(item.name)"
        :class="item.name === currentTitle ? 'acitveClass1' : ''"
        >{{ item.name }}</span
      >
    </div>
    <transition>
      <div class="cat-detail" v-if="isShow">
        <ul class="detail-item">
          <li
            v-for="(item1, index1) in songCategories.categories"
            :key="index1"
            class="cattitle"
          >
            <h2>
              <i v-if="index1 === '0'" class="iconfont icon-icon"></i>
              <i v-if="index1 === '1'" class="iconfont icon-fengge1"></i>
              <i v-if="index1 === '2'" class="iconfont icon-changjing"></i>
              <i v-if="index1 === '3'" class="iconfont icon-qinggan"></i>
              <i v-if="index1 === '4'" class="iconfont icon-gongju-zhuti"></i>
              {{ item1 }}
            </h2>
            <div class="catdetail">
              <div
                v-for="(item2, index2) in songCategories.sub"
                :key="index2"
                class="detailcate"
              >
                <el-button
                  round
                  size="mini"
                  v-if="parseInt(index1) === item2.category"
                  @click="catButtonClick(item2.name)"
                  :class="item2.name === currentTitle ? 'acitveClass' : ''"
                  >{{ item2.name }}</el-button
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    songCategories: {},
    hotSongCategories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isShow: false,
      currentTitle: "全部分类",
      isActive: false
    };
  },
  methods: {
    catClick() {
      this.isShow = !this.isShow;
    },
    hotClick(name) {
      this.currentTitle = name;
      this.$emit("goSongChange", name);
    },
    catButtonClick(name) {
      this.currentTitle = name;
      this.isShow = false;
      this.$emit("goSongChange", name);
    }
  }
};
</script>
<style lang="less" scoped>
.song-filter {
  margin-top: 90px;
  width: 1200px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .allcat {
    width: 100px;
    height: 40px;
    flex: 1;
    margin-left: 10px;
    background-color: rgb(245, 13, 13);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    text-align: center;
    border-radius: 8px;
  }
  .hotlabel {
    flex: 10;
    display: flex;
    justify-content: space-evenly;
  }
}
.acitveClass {
  color: white;
  background-color: red;
}
.acitveClass1 {
  color: red;
}
.cat-detail {
  width: 700px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  position: fixed;
  left: 300px;
  top: 180px;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9;
  .cat-detail::-webkit-scrollbar {
    display: none;
  }
  .detail-item {
    margin-bottom: 20px;
    .cattitle {
      list-style: none;
    }
    .catdetail {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .el-button {
        margin: 10px;
      }
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0; /*透明度*/
  transform: translateY(150px);
}
/*入场(离场)动画的时间段   */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.my-enter,
.my-leave-to {
  opacity: 0; /*透明度*/
  transform: translateX(70px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.8s ease;
}
</style>