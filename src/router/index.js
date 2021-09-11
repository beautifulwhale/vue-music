import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/views/Home/Home'
const FindMusic = () => import('../views/Aside/FindMusic.vue')
const Recommend = () => import('../views/Recommend/Recommend.vue')
const Rank = () => import('../views/Rank/Rank.vue')
const Singer = () => import('../views/Singer/Singer.vue')
const Song = () => import('../views/Song/Song.vue')
const Mv = () => import('../views/Mv/Mv.vue')
const SongDetails = () => import('../views/SongDetails/SongDetails.vue')
const SingerDetails = () => import('../views/SingerDetails/SingerDetails.vue')


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
          path:'/',
          component:FindMusic
        },
        {
          path:'/findmusic',
          component:FindMusic,
          children:[
            {
              path: '/', 
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
            },
            {
              path: '/singerdetails',
              component: SingerDetails
            }

          ]
        },
      ]
    }
  ]
})
