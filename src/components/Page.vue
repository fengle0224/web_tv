<template>
  <div class="page">
    <!--<div data-ugcplayhistory-elem="pager" class="mod-page">
         <span v-if="pageIndex>1" @click="beforePage()" class="noPage">上一页</span> 
         <a v-for="page in pages" :class="{curPage: page==pageIndex }"  :title="'跳转至'+page+'页'" @click="jump(page)">{{page}}</a>
         <a @click="nextPage()">下一页</a>
    </div>-->
    <el-pagination class="mod-page" background layout="prev, pager, next" :page-size="1" :total="100" @current-change="jump"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return{
      pages:[1,2,3,4,5,6,7,8,9,10],
      pageIndex:1,
      show:true
    }
  },
  methods:{
    jump:function(currentPage){
      //console.log(page);
      this.pageIndex=currentPage;
      this.$emit('myEvent',currentPage);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mod-page {
    text-align: center;
    height: 30px;
    margin-bottom:50px;
}
</style>
