// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.use(require('vue-wechat-title'))
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
