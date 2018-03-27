<template>
  <el-container id="app">
    <el-header class="header">
      <TopNav></TopNav>
    </el-header>
    <el-main class="main">
      <transition name="fade" mode="in-out">
        <router-view></router-view>
      </transition>
    </el-main>
    <el-footer class="footer">免责声明:本站所有视频均来自互联网收集而来，版权归原创者所有，如果侵犯了你的权益，请通知我们，我们会及时删除侵权内容，谢谢合作！</el-footer>
  </el-container>
</template>

<script>
import TopNav from '@/components/TopNav';
export default {
  name: 'App',
  components:{
    TopNav
  }
}
</script>

<style>
html {
    width: 100%;
}

body {
    font: 14px "微软雅黑","Helvetica Neue", Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
}

ul, li, p, h1, h2, h3, h4, h5, h6, dl, dt, dd {
    margin: 0;
    list-style: none;
    padding:0;
}

input {
    border: none;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

#app {
  background-color: #fff;
  color: #333;
  min-width: 1000px;
 
}
.header{
  padding:0;
}

.main{
  width:1200px;
  margin:0 auto;
}
.footer{
  text-align:center;
}
*{
  box-sizing:border-box;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

</style>
