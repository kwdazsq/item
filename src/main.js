// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import swiper from "./swiper"
import store from "./store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = Axios
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
