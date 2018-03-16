<template>
<div class="movies">
    <!--列表内容-->
   <ul class="movies_list">
      <li v-for="item in videos">
        <Movie :video="item"></Movie>
      </li>
    </ul>
    <!--分页-->
    <Page @myEvent="getMyEvent"></Page>
</div>

 
</template>

<script>
import Movie from '@/components/movie';
import Page from '@/components/Page';
import axios from 'axios';
export default {
  name: 'movies',
  components:{
    Movie,
    Page
  },
  data () {
    return {
     videos:[],
     page:1
    }
  },
  created:function(){
    axios.get("http://118.24.11.218:8888/api/movies?page="+this.page)
    .then(response=>{
      // console.log(response.data);
      this.videos=response.data;
      
    })
    .catch(error=>{
      console.log(error);
      alert("网络错误，不能访问");
    })
  },
  methods:{
    getMyEvent (page) {
      //var that=this;
      //console.log("子组件的值"+page);
      this.page=page;
      this.getData();
    },
    getData:function(){
    axios.get("http://118.24.11.218:8888/api/movies?page="+this.page)
    .then(response=>{
     //console.log(this.page);
      this.videos=response.data;
      
    })
    .catch(error=>{
      console.log(error);
      alert("网络错误，不能访问");
    })
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movies_list{
  width:100%;
  overflow:hidden;
  margin:20px 0;
 
}
.movies_list li{
  float:left;
  width:180px;
  margin:0 10px 30px;
}


</style>
