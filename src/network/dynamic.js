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