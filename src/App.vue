<template>
  <div id="app">
    <img class="logo" src="/static/logo.png">
    <p>
      Welcome to your Vue.js app!
    </p>
    <div class="nav">
      <a v-link="{name: 'home'}">首页</a> |
      <a v-link="{name: 'order'}">订单</a> |
      <a v-link="{name: 'UCenter'}">个人中心</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
.nav{
  padding: 10px;
}
</style>
