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
//获取用户关注列表
export function getUserFoucs(uid,limit,offset) {
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