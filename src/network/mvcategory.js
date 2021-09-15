import { request } from './request'
//获取最新mv
export function getLatest(limit,
    area) {
    return request({
        url: "/mv/first",
        params: {
            limit,
            area
        }
    })
}
//获取推荐mv
export function getHotMv() {
    return request({
        url: "/personalized/mv",
    })
}

//获取网易出品mv
export function getCloudMv(limit) {
    return request({
        url: "/mv/exclusive/rcmd",
        params:{
            limit
        }
    })
}