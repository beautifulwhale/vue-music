import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$bus = new Vue();


Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 设置路由导航守卫
router.beforeEach((to, from, next) => {
  let Flag = localStorage.getItem('Flag')
  if (Flag === 'isLogin') {
    store.state.isLogin = true
    next();
  } else {
    //用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      next({ path: '/login' })
      this.$message.error('请您先登录~')
    } else {
      next()
    }
  }
})


// router.beforeEach((to, from, next) => {
//   const token = store.state.token ? store.state.token : window.sessionStorage.getItem('token')
//   const avatarUrl = store.state.avatarUrl ? store.state.avatarUrl : window.sessionStorage.getItem('avatarUrl')
//   const nickname = store.state.nickname ? store.state.nickname : window.sessionStorage.getItem('nickname')
//   let Flag = localStorage.getItem('Flag')
//   if (Flag === 'isLogin') {
//     store.state.isLogin = true
//     next();
//   } else {
//     //用户想进入需要登录的页面，则定向回登录界面
//     if (to.meta.isLogin) {
//       next({ path: '/login' })
//       this.$message.error('请您先登录~')
//     } else {
//       next()
//     }
//   }
// })

