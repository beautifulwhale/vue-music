<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/Header/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>
<style lang='less' scoped>
</style>

