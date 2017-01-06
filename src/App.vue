<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div class="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/order">订单</router-link> |
      <router-link to="/ucenter">个人中心</router-link>
    </div>
    <!--<div v-wechat-title="$route.meta.title"></div>-->
    <!--or-->
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav{
  margin: 20px;
}
</style>
