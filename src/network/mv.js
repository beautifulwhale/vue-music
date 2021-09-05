import { request } from './request'
//获取歌手分类
export function getMvCat(limit,
    order,
    offset,
    type,
    area) {
    return request({
        url: "/mv/all",
        params: {
            limit,
            order,
            offset,
            type,
            area
        }
    })
}