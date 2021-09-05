<template>
  <div class="singerfilter">
    <div class="language-fliter">
      <div
        class="every-language"
        v-for="(item, index) in languageFilter"
        :key="index"
        :class="languageActive === item.label ? 'active' : ''"
        @click="sellectLanguage(item.label, item.value)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="singers-filter">
      <div
        class="every-singers"
        v-for="(item, index) in singersFilter"
        :key="index"
        :class="singersActive === item.label ? 'active' : ''"
        @click="sellectSingers(item.label, item.value)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="name-filter">
      <div
        class="every-name"
        v-for="(item1, index1) in nameFilter"
        :key="index1"
        :class="[
          item1.label === '热门' ? 'other' : '',
          item1.label === '其他' ? 'other' : '',
          nameActive === item1.label ? 'active1' : ''
        ]"
        @click="sellectName(item1.label, item1.value)"
      >
        {{ item1.label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    languageFilter: {
      type: Array,
      default() {
        return [];
      }
    },
    singersFilter: {
      type: Array,
      default() {
        return [];
      }
    },
    nameFilter: {
      type: Array,
      default() {
        return [];
      }
    },
    languageActive: {
      type: String
    },
    singersActive: {
      type: String
    },
    nameActive: {
      type: String
    }
  },
  methods: {
    sellectLanguage(label, value) {
      this.$emit("changeSinger", { type: "language", label, value });
    },
    sellectSingers(label, value) {
      this.$emit("changeSinger", { type: "singers", label, value });
    },
    sellectName(label, value) {
      this.$emit("changeSinger", { type: "name", label, value });
    }
  }
};
</script>
<style lang="less" scoped>
.singerfilter {
  margin-top: 90px;
  width: 1350px;
  height: 170px;
  margin-left: 100px;
  .language-fliter {
    width: 1350px;
    height: 50px;
    margin: 10px 0;
    display: flex;
    flex: 1;
    .every-language {
      width: 70px;
      height: 50px;
      padding: 5px;
      margin: 0 5px;
      text-align: center;
      line-height: 40px;
    }
  }
  .singers-filter {
    width: 1350px;
    height: 50px;
    margin: 10px 0;
    display: flex;
    flex: 1;
    .every-singers {
      width: 70px;
      height: 50px;
      padding: 5px;
      margin: 0 5px;
      text-align: center;
      line-height: 40px;
    }
  }
  .name-filter {
    width: 1350px;
    height: 50px;
    margin: 20px 5px;
    display: flex;
    flex: 1;
    .every-name {
      width: 30px;
      height: 30px;
      padding: 5px;
      margin: 5px 5px;
      padding: 5px;
      text-align: center;
      line-height: 30px;
    }
    .other {
      width: 60px;
      height: 50px;
    }
  }
}
.active {
  color: #fff;
  background-color: rgb(245, 93, 93);
  border-radius: 20px;
}
.active1 {
  color: #fff;
  background-color: rgb(245, 93, 93);
  border-radius: 50%;
}
</style>