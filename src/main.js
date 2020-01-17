import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:8081/'
axios.defaults.withCredentials = true

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
