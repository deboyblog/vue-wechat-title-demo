import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.use(Router)

var router = new Router()

// 这里用到的API是Vue-router1.x的对应Vuejs1.x
// 请注意根据不同版本的API去修改代码 包括下方的 afterEach
router.map({
  home: {
    name: 'home',
    title: '首页',
    component: require('./views/Home.vue')
  },
  order: {
    name: 'order',
    title: '订单',
    component: require('./views/Order.vue')
  },
  UCenter: {
    name: 'UCenter',
    title: '用户中心',
    component: require('./views/UCenter.vue')
  }
})

router.redirect({
  '*': '/home'
})
router.start(App, 'app')
