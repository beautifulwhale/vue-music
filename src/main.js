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






