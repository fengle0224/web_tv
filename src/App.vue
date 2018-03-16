<template>
  <div id="app">
   
  <!--主体部分-->
    <div class="main">
    <router-view>
    
    </router-view>
    </div>
    <!--底部信息-->
     <footer class="footer">
      免责声明:本站所有视频均来自互联网收集而来，版权归原创者所有，如果侵犯了你的权益，请通知我们，我们会及时删除侵权内容，谢谢合作！
     </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  width:1200px;
  margin:0 auto;
  
}
div.main{
  width:100%;
}
.footer{
  text-align:center;
}
*{
  box-sizing:border-box;
}
</style>
