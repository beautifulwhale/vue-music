import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取用户详细信息
export function getUserDetail(uid) {
    return request({
        url: "/user/detail",
        params: {
            uid,
            cookie
        }
    })
}
//获取用户动态列表
export function getUserDynamic(uid, limit, lasttime) {
    return request({
        url: "/user/event",
        params: {
            uid,
            limit,
            lasttime,
            cookie
        }
    })
}
//获取用户关注列表
export function getUserFoucs(uid, limit, offset) {
    return request({
        url: "/user/follows",
        params: {
            uid,
            limit,
            offset,
            cookie
        }
    })
}
//获取用户粉丝列表
export function getUserFans(uid, limit, offset) {
    return request({
        url: "/user/followeds",
        params: {
            uid,
            limit,
            offset,
            cookie
        }
    })
}
//关注并取关用户
export function followUser(id, t) {
    return request({
        url: "/follow",
        params: {
            id,
            t,
            cookie
        }
    })
}
//获取用户歌单
export function getUserPlayList(uid, limit, offset) {
    return request({
        url: "/user/playlist",
        params: {
            uid,
            limit,
            offset,
            cookie
        }
    })
}
//获取用户信息 , 歌单，收藏，mv, dj 数量
export function getUserSubcount() {
    return request({
        url: "/user/subcount",
        params: {
            cookie
        }
    })
}