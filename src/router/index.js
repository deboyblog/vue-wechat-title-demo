/**
 * Created by Deboy on 2017/1/6.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    name: 'Home',
    path: '/home',
    meta: {
      title: '首页'
    },
    component: require('../views/Home.vue')
  },
  {
    name: 'Order',
    path: '/order',
    meta: {
      title: '订单'
    },
    component: require('../views/Order.vue')
  },
  {
    name: 'UCenter',
    path: '/ucenter',
    meta: {
      title: '用户中心'
    },
    component: require('../views/UCenter.vue')
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

export default router
