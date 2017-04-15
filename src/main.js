import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routerConfig from './routerConfig.js'
import './elementConfig.js'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/animate.min.css' 
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);



new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
