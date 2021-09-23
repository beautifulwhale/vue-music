import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取歌单详情
export function getPlayListDetails(id) {
    return request({
        url: "/playlist/detail",
        params: {
            id,
            cookie
        }
    })
}
//获取歌曲详情
export function getSongDetails(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids,
            cookie
        }
    })
}
//获取收藏歌单者
export function getPlayListCollect(id) {
    return request({
        url: "/playlist/subscribers?limit=28",
        params: {
            id,
            cookie
        }
    })
}
//相关歌单推荐
export function getRelated(id) {
    return request({
        url: "/related/playlist",
        params: {
            id,
            cookie
        }
    })
}
//获取歌单评论
export function getComment(id, offset, limit) {
    return request({
        url: "/comment/playlist",
        params: {
            id,
            offset,
            limit,
            cookie
        }
    })
}
//获取歌曲的url
export function getMusicUrl(id) {
    return request({
        url: "/song/url",
        params: {
            id,
            cookie
        }
    })
}
//收藏/取消收藏歌单
export function collectPlayList(id, t) {
    return request({
        url: "/playlist/subscribe",
        params: {
            id,
            t,
            cookie
        }
    })
}