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
const VideoInfo = () => import('../views/Video/VideoInfo.vue')
const MvCategory = () => import('../views/MvCategory/MvCategory.vue')
const MvRankDetail = () => import('../views/MvCategory/MvRankDetail.vue')
const Mv = () => import('../views/Mv/Mv.vue')
const VideoDetails = () => import('../views/VideoDetails/VideoDetails.vue')
const SongDetails = () => import('../views/SongDetails/SongDetails.vue')
const SingerDetails = () => import('../views/SingerDetails/SingerDetails.vue')
const SearchList = () => import('../views/SearchList/SearchList.vue')
const Login = () => import('../views/Login/Login.vue')
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/findmusic'
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      children: [
        {
          path: '/',
          component: FindMusic
        },
        {
          path: '/findmusic',
          component: FindMusic,
          name: 'findmusic',
          children: [
            {
              path: '/',
              redirect: '/recommend',
            },
            {
              path: '/recommend',
              name: 'recommend',
              component: Recommend,
              children: [{
                path: '/login',
                component: Login,
                name: 'login'
              }]
            },
            {
              path: '/rank',
              component: Rank,
              name: 'rank'
            },
            {
              path: '/singer',
              component: Singer,
              name: 'singer'

            }, {
              path: '/song',
              component: Song,
              name: 'song'

            },
            {
              path: '/songdetails',
              component: SongDetails,
              name: 'songdetails'

            },
            {
              path: '/singerdetails',
              component: SingerDetails,
              name: 'singerdetails'
            },
          ]
        },
        {
          path: '/video',
          component: Video,
          children: [
            {
              path: '',
              redirect: '/videoinfo'
            },
            {
              path: '/videoinfo',
              component: VideoInfo
            },
            {
              path: '/mvcategory',
              component: MvCategory
            },
            {
              path:'/mvrankdetail',
              component:MvRankDetail
            },
            {
              path: '/mv',
              component: Mv
            },
            {
              path: '/videodetails',
              component: VideoDetails
            }
          ]
        },
        {
          path: '/search',
          name:'search',
          component: SearchList
        },

      ]
    }
  ]
})
export default router

//设置路由白名单
const allowList = ['home', 'findmusic', 'recommend', 'login', 'rank', 'singer', 'song', 'songdetails', 'singerdetails','search']
// 设置路由导航守卫
router.beforeEach((to, from, next) => {
  //有token
  let TOKEN = window.localStorage.getItem('token')
  if (TOKEN) {
    next()
  } else {
    //该路由是否在白名单数组
    if (allowList.includes(to.name)) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})