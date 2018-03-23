<template>
  <div class="tv">
  <el-row :gutter="20">
  <el-col :span="12">
     <iframe :src="tvUrl" frameborder="0" width="100%" height="500px"></iframe>
  </el-col>
  <!--如果是电视剧显示，否则不显示-->
  <el-col :span="6">
    <div>
      <h2>{{$route.params.title}}</h2> 
      <div class="playList"  v-show="teleplay">
        <ul>
          <li :class="{selected:playIndex==pIndex}" v-for="(item,pIndex) in allTv" @click="perPlay(item.url,pIndex,item.number)"><a>{{item.number}}</a></li>
        </ul>
      </div>
    </div>
  </el-col>
</el-row>
<el-row :gutter="20" v-show="teleplay">
  <el-col :span="20">
    <h2>{{$route.params.title}} 第{{number}}集</h2>
  </el-col>
</el-row>    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Tvplay',
  data () {
    return {
      teleplay:true,
      index:1,
      tvUrl:this.$route.params.url,
      allTv:[],
      playIndex:0,
      number:1
   }
  },
  created(){
      this.index=this.$route.params.index;
      if(this.index==1){
        this.teleplay=false;
      }else{
        this.teleplay=true;
        //如果是电视剧获取分集的数据
        axios.get("http://movies.llili.cn/api/playList?url="+this.tvUrl+"&checkedIndex="+this.index)
        .then(response=>{
          this.allTv=response.data;
        })
       .catch(error=>{
          console.log(error);
          alert("网络错误，不能访问");
        })
      }
  },
  methods:{
    perPlay(url,pIndex,number){
      this.playIndex=pIndex;
      this.number=number;
      this.tvUrl=url;
       console.log(this.tvUrl);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row{
    margin-top:20px;
  }
  h2{
    margin-bottom:30px;
  }
  div.playList{
    overflow:hidden;
    cursor:pointer;
  }
  div.playList li{
    float: left;
    border-right: 1px solid #1f1f1f;
    border-bottom: 1px solid #1f1f1f;
    font-size: 16px;
    font-family: "Arial";
  }
  div.playList li a{
   display: block;
    width: 39px;
    height: 39px;
    background-color: #2f2f2f;
    color: #c0c0c0;
    line-height: 41px;
    text-align: center;
    border: 2px solid #2f2f2f;
  }
  div.playList li.selected a{
    border: 2px solid #5aa700;
    background-color: #272728;
    color: #5aa700;
  }

</style>
