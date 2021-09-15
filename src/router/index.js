import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/views/Home/Home'
const FindMusic = () => import('../views/Aside/FindMusic.vue')
const Video = () => import('../views/Aside/Video.vue')
const Recommend = () => import('../views/Recommend/Recommend.vue')
const Rank = () => import('../views/Rank/Rank.vue')
const Singer = () => import('../views/Singer/Singer.vue')
const Song = () => import('../views/Song/Song.vue')
const Mv = () => import('../views/Mv/Mv.vue')
const DetailMv = () => import('../views/Mv/DetailMv.vue')
const VideoDetails = () => import('../views/VideoDetails/VideoDetails.vue')
const SongDetails = () => import('../views/SongDetails/SongDetails.vue')
const SingerDetails = () => import('../views/SingerDetails/SingerDetails.vue')
const SearchList = () => import('../views/SearchList/SearchList.vue')
const Login = () => import('../views/Login/Login.vue')
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/findmusic'
    },
    {
      path: '/home',
      component: Home,
      // meta: {
      //   isLogin: true
      // },
      children: [
        {
          path: '/',
          component: FindMusic
        },
        {
          path: '/findmusic',
          component: FindMusic,
          children: [
            {
              path: '/',
              redirect: '/recommend'
            },
            {
              path: '/recommend',
              component: Recommend,
              children: [{
                path: '/login',
                component: Login,
              },]
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
            },
            {
              path: '/songdetails',
              component: SongDetails
            },
            {
              path: '/singerdetails',
              component: SingerDetails
            },
          ]
        },
        {
          path: '/video',
          component: Video,
          children: [
            {
              path: '',
              redirect: '/mv'
            },
            {
              path: '/mv',
              component: Mv
            },
            {
              path: '/detailmv',
              component: DetailMv
            },
            {
              path: '/videodetails',
              component: VideoDetails
            }
          ]
        },
        {
          path: '/search',
          component: SearchList
        },

      ]
    }
  ]
})
