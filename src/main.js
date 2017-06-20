import Vue from 'vue'
import App from './App'
import router from './router/routers'
import {baseUrl} from './config/base'
import 'amazeui/dist/css/amazeui.min.css'
import 'amazeui/dist/js/amazeui.min'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
