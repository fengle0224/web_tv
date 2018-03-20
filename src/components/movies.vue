<template>
<div class="movies">
    <!--条件筛选-->
    <Condition @classifyClick="classifyHandle"></Condition>
    <!--视频列表-->
    <el-row :gutter="20" class="movies_list">
      <el-col :span="4"  v-for="item in videos" :key="item"><Movie :video="item"></Movie></el-col>
    </el-row>
    <!--分页-->
    <Page @myEvent="getMyEvent"></Page>
</div>

 
</template>

<script>
import Condition from '@/components/condition';
import Movie from '@/components/movie';
import Page from '@/components/Page';
import axios from 'axios';
export default {
  name: 'movies',
  components:{
    Condition,
    Movie,
    Page
  },
  data () {
    return {
     videos:[],
     page:1,
     value:"/www/1/----------------iqiyi--.html"
    }
  },
  created:function(){
     this.getData();
  },
  methods:{
    getMyEvent (currentPage) {
      //var that=this;
      //console.log("子组件的值"+page);
      this.page=currentPage;
      this.getData();
    },
    getData:function(){
    axios.get("http://movies.llili.cn/api/movies?page="+this.page+"&classify="+this.value)
    .then(response=>{
     //console.log(this.page);
      this.videos=response.data;
      
    })
    .catch(error=>{
      console.log(error);
      alert("网络错误，不能访问");
    })
  },
  classifyHandle(value){
    this.value=value;
    //alert(this.value);
    this.getData();
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movies_list{
  margin:20px 0;
 
}


</style>
