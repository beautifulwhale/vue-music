import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/views/Home/Home'
const FindMusic = () => import('../views/Aside/FindMusic.vue')
const Video = () => import('../views/Aside/Video.vue')
const Friends = () => import('../views/Aside/Friends.vue')
const Recommend = () => import('../views/Recommend/Recommend.vue')
const Rank = () => import('../views/Rank/Rank.vue')
const Singer = () => import('../views/Singer/Singer.vue')
const Song = () => import('../views/Song/Song.vue')
const VideoInfo = () => import('../views/Video/VideoInfo.vue')
const VideoPlay = () => import('../views/Video/VideoPlay.vue')
const MvCategory = () => import('../views/MvCategory/MvCategory.vue')
const MvRankDetail = () => import('../views/MvCategory/MvRankDetail.vue')
const Mv = () => import('../views/Mv/Mv.vue')
const VideoDetails = () => import('../views/VideoDetails/VideoDetails.vue')
const SongDetails = () => import('../views/SongDetails/SongDetails.vue')
const SingerDetails = () => import('../views/SingerDetails/SingerDetails.vue')
const SearchList = () => import('../views/SearchList/SearchList.vue')
const Login = () => import('../views/Login/Login.vue')
const Dynamic = () => import('../views/Dynamic/Dynamic.vue')
const TopicRank = () => import('../views/Topic/TopicRank.vue')
const TopicDetails = () => import('../views/Topic/TopicDetails.vue')
const EveryTopic = () => import('../views/Topic/EveryTopic.vue')
const User = () => import('../views/User/User.vue')
const UserFoucs = () => import('../views/User/UserFoucs.vue')
const UserFans = () => import('../views/User/UserFans.vue')
const UserDynamic = () => import('../views/User/UserDynamic.vue')
const DynamicComment = () => import('../views/User/DynamicComment.vue')
const AblumDetails = () => import('../views/AlbumDetails/AlbumDetails.vue')
const Exclusive = () => import('../views/Exclusive/Exclusive.vue')
const MyCustom = () => import('../views/MyCustom/MyCustom.vue')
const NewMusic = () => import('../views/NewMusic/NewMusic.vue')
const RecentPlay = () => import('../views/RecentPlay/RecentPlay.vue')
const MusicCloudDisk = () => import('../views/MusicCloudDisk/MusicCloudDisk.vue')
const MyPodcast = () => import('../views/MyPodcast/MyPodcast.vue')
const MyCollect = () => import('../views/MyCollect/MyCollect.vue')
const EditPlayList = () => import('../views/EditPlayList/EditPlayList.vue')
const SingleMusic = () => import('../views/SingleMusic/SingleMusic.vue')
const PersonalFM = () => import('../views/PersonalFM/PersonalFM.vue')
const Radio = () => import('../views/Radio/Radio.vue')
const RadioDetail = () => import('../views/RadioDetail/RadioDetail.vue')
const RadioCateContent = () => import('../views/RadioCateContent/RadioCateContent.vue')
const RadioRank = () => import('../views/RadioDetail/RadioRank.vue')
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/findmusic'
    },
    {
      path: '/home',
      component: Home,
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
              path: '/mycustom',
              component: MyCustom
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
            {
              path: '/ablumdetails',
              component: AblumDetails
            },
            {
              path: '/newmusic',
              component: NewMusic
            }
          ]
        },
        {
          path: '/radio',
          component: Radio
        },
        {
          path: '/radiodetail',
          component: RadioDetail
        },
        {
          path: '/radiocatecontent',
          component: RadioCateContent
        },
        {
          path: '/radiorank',
          component: RadioRank
        },
        {
          path: '/exclusive',
          component: Exclusive
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
              path: '/mvrankdetail',
              component: MvRankDetail
            },
            {
              path: '/mv',
              component: Mv
            },
            {
              path: '/videodetails',
              component: VideoDetails
            },
            {
              path: '/videoplay',
              component: VideoPlay
            }
          ]
        },
        {
          path: '/search',
          name: 'search',
          component: SearchList
        },
        {
          path: '/friends',
          component: Friends,
          children: [
            {
              path: '',
              redirect: '/dynamic'
            },
            {
              path: '/dynamic',
              component: Dynamic
            },
            {
              path: '/topicrank',
              component: TopicRank
            },
            {
              path: '/topicdetails',
              component: TopicDetails
            },
            {
              path: '/everytopic',
              component: EveryTopic
            },
            {
              path: '/user',
              component: User
            },
            {
              path: '/userfoucs',
              component: UserFoucs
            },
            {
              path: '/userfans',
              component: UserFans
            },
            {
              path: '/userdynamic',
              component: UserDynamic,
            },
            {
              path: '/dynamiccomment',
              component: DynamicComment
            }
          ]
        },
        {
          path: '/personalfm',
          component: PersonalFM,
        },
        {
          path: '/recentplay',
          component: RecentPlay
        },
        {
          path: '/cloudDisk',
          component: MusicCloudDisk
        },
        {
          path: '/mypodcast',
          component: MyPodcast
        },
        {
          path: '/mycollect',
          component: MyCollect
        },
        {
          path: '/editplayList',
          component: EditPlayList
        },
        {
          path: '/singlemusic',
          component: SingleMusic
        }
      ]
    },

  ]
})
export default router

//设置路由白名单
const allowList = ['home', 'findmusic', 'recommend', 'login', 'rank', 'singer', 'song', 'songdetails', 'singerdetails', 'search']
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

