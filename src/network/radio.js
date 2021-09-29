import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取分类
export function getRadioCate() {
    return request({
        url: '/dj/catelist',
        params: {
            cookie
        }
    })
}
//获取电台Banner
export function getRadioBanner() {
    return request({
        url: '/dj/banner',
        params: {
            cookie
        }
    })
}
//获取电台个性推荐
export function getRadioCharact() {
    return request({
        url: '/dj/today/perfered',
        params: {
            cookie
        }
    })
}
//获取电台 - 分类推荐
export function getCateRecommend(type) {
    return request({
        url: "/dj/recommend/type",
        params: {
            type,
            cookie
        }
    })
}
//获取热门电台
export function getRadioHot(limit, offset) {
    return request({
        url: "/dj/hot",
        params: {
            limit,
            offset,
            cookie
        }
    })
}
// 获取电台 - 类别热门电台
export function getCateHot(limit, offset, cateId) {
    return request({
        url: "/dj/radio/hot",
        params: {
            limit,
            offset,
            cateId,
            cookie
        }
    })
}
//推荐节目
export function recomShow() {
    return request({
        url: "/program/recommend",
        params: {
            cookie
        }
    })
}
//获取电台详情
export function getRadioDetail(rid) {
    return request({
        url: "/dj/detail",
        params: {
            rid,
            cookie
        }
    })
}
//获取电台节目
export function getProgram(rid, limit, offset) {
    return request({
        url: "/dj/program",
        params: {
            rid,
            limit,
            offset,
            cookie
        }
    })
}
//获取电台收藏者
export function getRadioCollect(id, limit, time) {
    return request({
        url: "/dj/subscriber",
        params: {
            id,
            limit,
            time,
            cookie
        }
    })
}
//获取节目详情
export function getShowDetail(id) {
    return request({
        url: "/dj/program/detail",
        params: {
            id,
            cookie
        }
    })
}
//获取节目榜
export function getShowRank() {
    return request({
        url: "/dj/program/toplist",
        params: {
            cookie
        }
    })
}
//电台 - 新晋电台榜/热门电台榜
export function getDjRank(type) {
    return request({
        url: "/dj/toplist",
        params: {
            type,
            cookie
        }
    })
}