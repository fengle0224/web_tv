<template>
  <div class="page">
    <div data-ugcplayhistory-elem="pager" class="mod-page">
         <span v-if="pageIndex>1" @click="beforePage()" class="noPage">上一页</span> 
         <a v-for="page in pages" :class="{curPage: page==pageIndex }"  :title="'跳转至'+page+'页'" @click="jump(page)">{{page}}</a>
         <a @click="nextPage()">下一页</a>
    </div>
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
    jump:function(page){
      //console.log(page);
      this.pageIndex=page;
      this.$emit('myEvent',page);
    },
    beforePage:function(){
      this.pageIndex--;
      this.page=this.pageIndex;
      //console.log(this.page);
      this.$emit('myEvent',this.page);
      if(this.pageIndex>10){
        var newPages=[];
        this.pages.pop(this.page);
        console.log(this.pageIndex);
        newPages=this.pages.slice(this.pages.length-7,this.pages.length);
        var num1=newPages[0]-1;
        newPages.unshift(num1);
         //console.log(newPages);
        newPages.unshift("...");
        newPages.unshift(1);
        this.pages=newPages;
      }else{
         console.log(this.pageIndex);
        this.pages=[1,2,3,4,5,6,7,8,9,10]
      }
    },
    nextPage:function(){
      this.pageIndex++;
      this.page=this.pageIndex;
      this.$emit('myEvent',this.page);
      if(this.pageIndex>=10){
        var newPages=[];
        this.pages.push(this.page);
        newPages=this.pages.slice(this.pages.length-8,this.pages.length);
        newPages.unshift("...");
        newPages.unshift(1);
        this.pages=newPages;
      }
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
.mod-page a, .mod-page span {
    display: inline-block;
    min-width: 33px;
    _width: 33px;
    height: 28px;
    color: #333;
    line-height: 27px;
    font-size: 14px;
    margin: 0 5px;
    vertical-align: middle;
    border-radius: 2px;
    border: 1px solid #e3e3e3;
    background: #fff;
    padding:0 10px;
    cursor:pointer;
}
.mod-page .curPage {
    background: #699e00;
    border: 1px solid #5f9000;
    color: #fff;
    cursor: default;
}
</style>
