import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取电台Banner
export function getRadioBanner() {
    return request({
        url: "/dj/category/recommend",
        params: {
            cookie
        }
    })
}
//获取电台分类
export function getRadioCate() {
    return request({
        url: "/dj/catelist",
        params: {
            cookie
        }
    })
}
//获取推荐电台
export function getRadioRecom() {
    return request({
        url: "/dj/recommend",
        params: {
            cookie
        }
    })
}