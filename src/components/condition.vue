<template>
  <div class="condition">
   <div class="pindao" v-for="classify in classifys">
        <H3>{{classify.classfyName}}</H3>
        <ul v-for="item in classify.detailClassify">
            <li @click="classifyClick(item.value)">{{item.name}}</li>
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
        classifys:[{"classifyName":"频道：","detailClassify":[{"name":"电视剧","value":"/www/2/----------------iqiyi--.html"},{"name":"电影","value":"/www/1/----------------iqiyi--.html"},{"name":"综艺","value":"/www/6/----------------iqiyi--.html"},{"name":"动漫","value":"/www/4/----------------iqiyi--.html"},{"name":"纪录片","value":"/www/3/----------------iqiyi--.html"},{"name":"游戏","value":"/www/8/----------------iqiyi--.html"},{"name":"资讯","value":"/www/25/----------------iqiyi--.html"},{"name":"娱乐","value":"/www/7/----------------iqiyi--.html"},{"name":"财经","value":"/www/24/----------------iqiyi--.html"},{"name":"网络电影","value":"/www/16/----------------iqiyi--.html"},{"name":"片花","value":"/www/10/1007----------------iqiyi--.html"},{"name":"音乐","value":"/www/5/----------------iqiyi--.html"},{"name":"军事","value":"/www/28/----------------iqiyi--.html"},{"name":"教育","value":"/www/12/----------------iqiyi--.html"},{"name":"体育","value":"/www/17/----------------iqiyi--.html"},{"name":"儿童","value":"/www/15/----------------iqiyi--.html"},{"name":"旅游","value":"/www/9/----------------iqiyi--.html"},{"name":"时尚","value":"/www/13/----------------iqiyi--.html"},{"name":"生活","value":"/www/21/----------------iqiyi--.html"},{"name":"汽车","value":"/www/26/----------------iqiyi--.html"},{"name":"搞笑","value":"/www/22/----------------iqiyi--.html"},{"name":"广告","value":"/www/20/----------------iqiyi--.html"},{"name":"原创","value":"/www/27/----------------iqiyi--.html"},{"name":"母婴","value":"/www/29/----------------iqiyi--.html"},{"name":"科技","value":"/www/30/----------------iqiyi--.html"},{"name":"脱口秀","value":"/www/31/----------------iqiyi--.html"},{"name":"健康","value":"/www/32/----------------iqiyi--.html"},{"name":"收起","value":"javascript:;"}]},{"classifyName":"资费：","detailClassify":[{"name":"全部","value":"/www/1/-------------11-1-1-iqiyi--.html"},{"name":"免费","value":"/www/1/----------0---11-1-1-iqiyi--.html"},{"name":"付费","value":"/www/1/----------2---11-1-1-iqiyi--.html"}]},{"classifyName":"地区：","detailClassify":[{"name":"全部","value":"#"},{"name":"华语","value":"/www/1/1-------------11-1-1-iqiyi--.html"},{"name":"香港","value":"/www/1/28997-------------11-1-1-iqiyi--.html"},{"name":"美国","value":"/www/1/2-------------11-1-1-iqiyi--.html"},{"name":"欧洲","value":"/www/1/3-------------11-1-1-iqiyi--.html"},{"name":"韩国","value":"/www/1/4-------------11-1-1-iqiyi--.html"},{"name":"日本","value":"/www/1/308-------------11-1-1-iqiyi--.html"},{"name":"泰国","value":"/www/1/1115-------------11-1-1-iqiyi--.html"},{"name":"其它","value":"/www/1/5-------------11-1-1-iqiyi--.html"}]},{"classifyName":"类型：","detailClassify":[{"name":"全部","value":"#"},{"name":"喜剧","value":"/www/1/-8------------11-1-1-iqiyi--.html"},{"name":"悲剧","value":"/www/1/-13------------11-1-1-iqiyi--.html"},{"name":"爱情","value":"/www/1/-6------------11-1-1-iqiyi--.html"},{"name":"动作","value":"/www/1/-11------------11-1-1-iqiyi--.html"},{"name":"枪战","value":"/www/1/-131------------11-1-1-iqiyi--.html"},{"name":"犯罪","value":"/www/1/-291------------11-1-1-iqiyi--.html"},{"name":"惊悚","value":"/www/1/-128------------11-1-1-iqiyi--.html"},{"name":"恐怖","value":"/www/1/-10------------11-1-1-iqiyi--.html"},{"name":"悬疑","value":"/www/1/-289------------11-1-1-iqiyi--.html"},{"name":"动画","value":"/www/1/-12------------11-1-1-iqiyi--.html"},{"name":"家庭","value":"/www/1/-27356------------11-1-1-iqiyi--.html"},{"name":"奇幻","value":"/www/1/-1284------------11-1-1-iqiyi--.html"},{"name":"魔幻","value":"/www/1/-129------------11-1-1-iqiyi--.html"},{"name":"科幻","value":"/www/1/-9------------11-1-1-iqiyi--.html"},{"name":"战争","value":"/www/1/-7------------11-1-1-iqiyi--.html"},{"name":"青春","value":"/www/1/-130------------11-1-1-iqiyi--.html"},{"name":"收起","value":"javascript:;"}]},{"classifyName":"规格：","detailClassify":[{"name":"全部","value":"#"},{"name":"巨制","value":"/www/1/------27397-------11-1-1-iqiyi--.html"},{"name":"院线","value":"/www/1/------27815-------11-1-1-iqiyi--.html"},{"name":"独播","value":"/www/1/------30149-------11-1-1-iqiyi--.html"},{"name":"网络大电影","value":"/www/1/------27401-------11-1-1-iqiyi--.html"},{"name":"经典","value":"/www/1/------27976-------11-1-1-iqiyi--.html"},{"name":"口碑佳片","value":"/www/1/------27977-------11-1-1-iqiyi--.html"},{"name":"杜比","value":"/www/1/------29696-------11-1-1-iqiyi--.html"},{"name":"电影节目","value":"/www/1/------29698-------11-1-1-iqiyi--.html"},{"name":"4K","value":"/www/1/------29745-------11-1-1-iqiyi--.html"},{"name":"原声","value":"/www/1/------296-------11-1-1-iqiyi--.html"},{"name":"粤语","value":"/www/1/------311-------11-1-1-iqiyi--.html"}]},{"classifyName":"我的年代：","detailClassify":[{"name":"全部","value":"/www/1/-------------11-1-1-iqiyi--.html"},{"name":"2018","value":"/www/1/-----------2018--11-1-1-iqiyi--.html"},{"name":"2017","value":"/www/1/-----------2017--11-1-1-iqiyi--.html"},{"name":"2016","value":"/www/1/-----------2016--11-1-1-iqiyi--.html"},{"name":"2015-2011","value":"/www/1/-----------2011_2015--11-1-1-iqiyi--.html"},{"name":"2010-2000","value":"/www/1/-----------2000_2010--11-1-1-iqiyi--.html"},{"name":"90年代","value":"/www/1/-----------1990_1999--11-1-1-iqiyi--.html"},{"name":"80年代","value":"/www/1/-----------1980_1989--11-1-1-iqiyi--.html"},{"name":"更早","value":"/www/1/-----------1964_1979--11-1-1-iqiyi--.html"}]},{"classifyName":"您还可以搜索：","detailClassify":[{"name":"林正英","value":"//so.iqiyi.com/so/q_林正英电影?source=list"},{"name":"周星驰","value":"//so.iqiyi.com/so/q_周星驰电影?source=list"},{"name":"李连杰","value":"//so.iqiyi.com/so/q_李连杰电影?source=list"},{"name":"成龙","value":"//so.iqiyi.com/so/q_成龙电影?source=list"},{"name":"周润发","value":"//so.iqiyi.com/so/q_周润发电影?source=list"},{"name":"吴京","value":"//so.iqiyi.com/so/q_吴京电影?source=list"},{"name":"洪金宝","value":"//so.iqiyi.com/so/q_洪金宝电影大全?source=list"},{"name":"刘德华","value":"//so.iqiyi.com/so/q_刘德华电影?source=list"},{"name":"鬼片","value":"//so.iqiyi.com/so/q_鬼片大全?source=list"},{"name":"帕丁顿熊","value":"//so.iqiyi.com/so/q_帕丁顿熊?source=list"},{"name":"甄子丹","value":"//so.iqiyi.com/so/q_甄子丹电影?source=list"},{"name":"丧尸","value":"//so.iqiyi.com/so/q_丧尸片?source=list"},{"name":"哈利波特","value":"//so.iqiyi.com/so/q_哈利波特?source=list"},{"name":"杰森斯坦森","value":"//so.iqiyi.com/so/q_杰森斯坦森全部电影?source=list"},{"name":"孙悟空","value":"//so.iqiyi.com/so/q_孙悟空?source=list"},{"name":"王宝强","value":"//so.iqiyi.com/so/q_王宝强电影?source=list"},{"name":"复仇者联盟","value":"//so.iqiyi.com/so/q_复仇者联盟?source=list"},{"name":"灾难片","value":"//so.iqiyi.com/so/q_灾难片?source=list"},{"name":"印度","value":"//so.iqiyi.com/so/q_印度电影?source=list"},{"name":"生化危机","value":"//so.iqiyi.com/so/q_生化危机?source=list"},{"name":"收起","value":"javascript:;"}]}]
    }
  },
//   created () {
//       axios.get("http://movies.llili.cn/api/classify")
//     .then(response=>{
//       this.classifys=response.data;
//       consoloe.log(this.classifys)
      
//     })
//     .catch(error=>{
//       console.log(error);
//       alert("网络错误，不能访问");
//     })
  //}
  methods:{
      classifyClick (value) {
          alert(value);
        this.$emit('classifyClick',value);
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
        position: relative;
        padding: 5px 15px 5px 0;
        height: 25px;
        overflow: hidden;
    }
    .pindao:last-child{
        border-bottom: 0;
    }
    .pindao h3,.pindao ul{
        float:left;
    }
    .pindao ul li{
        white-space: nowrap;
        float: left;
        display: inline;
        margin: 0 20px 6px 0;
        line-height: 22px;
    }
</style>
