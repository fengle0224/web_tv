<template>
  <div class="hello">
       <a class="per-video" >
      <div>
        <img width="180" height="236" rseat="dsjp7" :title="video.title" :alt="video.title" :src="getImage(video.imageUrl)">
      </div>
      <div class="detail">
		    <p class="title g-clear">
           <span class="s1">{{video.title}}</span>
           <span class="s2">{{video.score}}</span>
        </p>
        <p class="star">{{video.role}}</p>
      </div>
    </a>    
  </div>
</template>

<script>
export default {
  name: 'movie',
  props:['video'],
  methods:{
    getImage(url){
        //console.log(url);
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if(url != undefined){
           return url='https://images.weserv.nl/?url='+url;
        }

     }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #333;
}
.hello{
  margin-bottom:20px;
}
span:hover, span:active,p:hover,p:active {
    color: #699f00;
}
p.title,p.star{
  height:25px;
  line-height:25px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
span.s1{
  float:left;
}
span.s2{
  float:right;
}
</style>
