import Vue from 'vue'
export const bus = new Vue({
  data () {
    return {
      // 定义数据
      data: {}
    }
  },
  created () {
    // 绑定监听
    this.$on('getSearchData', (value)=>{
      this.data = value.data
    })
  }
})
