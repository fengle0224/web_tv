import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/movies'
import TvPlay from '@/components/tvPlay'
import Search from '@/components/search'

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
    },{
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
