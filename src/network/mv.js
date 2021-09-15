import { request } from './request'
//获取全部视频
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