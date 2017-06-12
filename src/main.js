import Vue from 'vue'
import App from './App'
import router from './router/routers'
import 'amazeui/dist/css/amazeui.min.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
