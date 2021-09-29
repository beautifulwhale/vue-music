<template>
  <div class="letters">
    <div class="letter" v-for="(item, index) in letterList" :key="index">
      <email-item :email-item="item"></email-item>
    </div>
  </div>
</template>
<script>
import EmailItem from "@/components/Email/EmailItem";
export default {
  props: {
    letterList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    EmailItem
  }
};
</script>
<style lang="less" scoped>
.letters {
  width: 330px;
  overflow-y: scroll;
  .letter {
    width: 330px;
    height: 50px;
  }
}
</style>