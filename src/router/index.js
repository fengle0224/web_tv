import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/movies'
import TvPlay from '@/components/tvPlay'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies
    },{
      path:'/tvPlay',
      name:'tvPlay',
      component:TvPlay
    }
  ]
})
