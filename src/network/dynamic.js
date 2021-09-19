import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');

//获取动态评论
export function getDynamicComment(threadId) {
    return request({
        url: "/comment/event",
        params: {
            threadId,
            cookie
        }
    })
}
//转发用户动态
export function userDynamicForward(uid, evId, forwards) {
    return request({
        url: "/event/forward",
        params: {
            uid,
            evId,
            forwards,
            cookie
        }
    })
}

//给动态点赞
export function likeDynamic(type, t, threadId) {
    return request({
        url: "/resource/like",
        params: {
            type,
            t,
            threadId,
            cookie
        }
    })
}