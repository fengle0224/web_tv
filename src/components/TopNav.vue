<template>
  <el-menu class="el-menu-demo" mode="horizontal"  background-color="#292929"
  text-color="#fff">
        <el-menu-item index="1">
          <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="onSubmit">
          <el-button slot="append" icon="el-icon-search" @click="onSubmit()"></el-button>
          </el-input>

        </el-menu-item>
      </el-menu>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TopNav',
  data(){
    return {
      input:"",
      sMovies:[]
    }
  },
  watch:{
    '$route' () {
        this.onSubmit();
    }
  },
  methods:{
    onSubmit(){
       if(this.input!=""){
        axios.get("http://movies.llili.cn/api/search?query="+this.input)
        .then(response=>{
        this.sMovies=response.data;
        this.$router.replace({ path: '/search',query:{sMovies:this.sMovies}});
        })
        .catch(error=>{
          console.log(error);
          alert("网络错误，不能访问");
        })
      }
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu--horizontal > .el-menu-item{
  width:1200px;
  margin:0 auto;
  float:none;
  }
.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0;
    color: #303133;
}

.el-menu-item.is-active {
    color: #699e00;
}
.el-input-group{
  width:25%;
}
</style>
