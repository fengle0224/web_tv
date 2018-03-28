<template>
<div class="movies">
    <!--视频列表-->
    <el-row :gutter="20" class="movies_list">
      <el-col :span="4"  v-for="(item,index) in videos" :key="index">
      <router-link :to="{name:'tvPlay',params:{url:item.url,title:item.title,index:item.searchType}}" >
        <Movie :video="item"></Movie>
      </router-link>
      </el-col>
    </el-row>
    {{videos}}
</div>
 
</template>

<script>                     
import Movie from '@/components/movie';
import axios from 'axios';
export default {
  name: 'search',
  components:{
    Movie
  },
  data () {
    return {
     videos:this.$route.query.sMovies
    }
  },
  watch:{
    newValue(){
         this.videos=this.$route.query.sMovies
    }
  },
  computed: {
    newValue() {
    　　return this.videos=this.$route.query.sMovies
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
