import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取通知私信
export function personalLetter(limit, offset) {
    return request({
        url: "/msg/private",
        params: {
            limit,
            offset,
            cookie
        }
    })
}
//获取通知评论
export function personalComment(uid, limit, before) {
    return request({
        url: "/msg/comments",
        params: {
            uid,
            limit,
            before,
            cookie
        }
    })
}
//获取通知@我
export function getCallMe(limit, offset) {
    return request({
        url: "/msg/forwards",
        params: {
            limit,
            offset,
            cookie
        }
    })
}
//获取通知--通知
export function getNotice(limit, lasttime) {
    return request({
        url: "/msg/notices",
        params: {
            limit,
            lasttime,
            cookie
        }
    })
}
//发送私信
export function sendEmail(user_ids, msg) {
    return request({
        url: "/send/text",
        params: {
            user_ids,
            msg,
            cookie
        }
    })
}
//私信内容
export function letterContent(uid, limit, before) {
    return request({
        url: "/msg/private/history",
        params: {
            uid,
            limit,
            before,
            cookie
        }
    })
}