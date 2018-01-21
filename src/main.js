// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
// 引入更新rem的js
import '@/styles/reset.js'
// 引入通用css
import '@/styles/index.less'
// 引入奥森图标
import '@/styles/css/font-awesome.min.css'

// 引入Element-ui组件 走马灯
import { Carousel, CarouselItem } from 'element-ui'

Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)

// 引入http库
import axios from 'axios'
Vue.prototype.$http = axios

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // render: h => h(App)
})
