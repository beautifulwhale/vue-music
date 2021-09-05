import { request } from './request'
//获取歌手分类
export function getSingerCat(limit,
    initial,
    offset,
    type,
    area) {
    return request({
        url: "/artist/list",
        params: {
            limit,
            initial,
            offset,
            type,
            area
        }
    })
}