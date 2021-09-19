import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');

//发送评论
export function sendComment(t, type, id, content) {
    return request({
        url: "/comment",
        method: 'post',
        data: {
            t,
            type,
            id,
            content,
            cookie
        }
    })
}
//动态发送评论
export function sendDyComment(t, type, threadId, content) {
    return request({
        url: "/comment",
        method: 'post',
        data: {
            t,
            type,
            threadId,
            content,
            cookie
        }
    })
}
//给评论点赞
export function likeComment(t, type, id, cid) {
    return request({
        url: "/comment/like",
        method: 'post',
        data: {
            t,
            type,   
            id,
            cid,
            cookie
        }
    })
}




