import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/views/Home/Home'
const Recommend = () => import('../views/Recommend/Recommend.vue')
const Rank = () => import('../views/Rank/Rank.vue')
const Singer = () => import('../views/Singer/Singer.vue')
const Song = () => import('../views/Song/Song.vue')
const Mv = () => import('../views/Mv/Mv.vue')
const SongDetails = () => import('../views/SongDetails/SongDetails.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/recommend'
        },
        {
          path: '/recommend',
          component: Recommend
        },
        {
          path: '/rank',
          component: Rank
        },
        {
          path: '/singer',
          component: Singer
        }, {
          path: '/song',
          component: Song
        }, {
          path: '/mv',
          component: Mv
        },
        {
          path: '/songdetails',
          component: SongDetails
        }
      ]
    }
  ]
})
