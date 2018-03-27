<template>
  <div class="condition">
   <div class="pindao" v-for="(classify,cIndex) in classifys">
        <h3>{{classify.classifyName}}</h3>
        <ul>
            <li v-for="(item,index) in classify.detailClassify" :class="{checked: (cIndex+'.'+index)==classifyIndex[cIndex]}" @click="classifyClick(item.value,index,cIndex)">{{item.name}}</li>
        </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'condition',
  data () {
    return{
       classifys:[],
       classifyIndex:[0.1,1.0,2.0,3.0,4.0,5.0]
    }
  },
  created () {
     this.loadClassify("");
  },
  methods:{
      classifyClick (value,index,cIndex) {
        this.classifyIndex[cIndex]=(cIndex+'.'+index);
        this.loadClassify(value);
        this.$emit('classifyClick',value,index,cIndex);
      },
     loadClassify(value){
        axios.get("http://movies.llili.cn/api/classify?classify="+value)
            .then(response=>{
            this.classifys=response.data;
            //console.log(this.classifys);
        
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
    .condition{
        width:100%;
        border:1px solid #e0e0e0;
        padding: 0 20px;
        margin-top:20px;
    }
    .pindao{
        border-bottom: 1px dotted #d5d5d5;
        padding: 5px 15px 5px 0;
        line-height:25px;
        overflow: hidden;
       
    }
    .pindao:last-child{
        border-bottom: 0;
    }
    
    .pindao h3{
        float:left;
        font-size:12px;
        color:#999;
        font-weight:normal;
        width:6%;
    }
    .pindao ul{
        width:90%;
        float:left;
    }
    .pindao ul li{
        white-space: nowrap;
        float: left;
        display: inline;
        margin: 0 20px 2px 0;
        line-height: 25px;
        cursor:pointer;
        padding: 0px 5px;
    }
    .pindao ul li.checked{
        background: #699f00;
        color: #fff;
        border-radius: 1px;
    }
        
</style>
