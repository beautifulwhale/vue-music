import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//轮播图
export function getBanner(type) {
    return request({
        url: "/banner",
        params: { type }
    })
}
//推荐歌单
export function getRecomPlayList() {
    return request({
        url: "/personalized?limit=15",
    })
}
//推荐歌曲
export function getRecomSongList() {
    return request({
        url: "/personalized/newsong"
    })
}
//推荐歌手
export function getRecomSingerList() {
    return request({
        url: "/top/artists?limit=18"
    })
}
//独家放送
export function getExclusive() {
    return request({
        url: "/personalized/privatecontent"
    })
}
//独家放送详细
export function getExclusiveList(limit, offset) {
    return request({
        url: "/personalized/privatecontent/list",
        params: {
            limit,
            offset
        }
    })
}

//每日推荐歌单
export function getEveryPlayList() {
    return request({
        url: "/recommend/resource",
        params: {
            cookie
        }
    })
}

//音乐日历
export function getCalendar() {
    return request({
        url: "/calendar",
        params: {
            cookie
        }
    })
}