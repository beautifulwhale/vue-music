import { request } from './request'
//获取总歌单
export function getAllSong(order, cat, limit, offset) {
    return request({
        url: "/top/playlist",
        params: {
            order,
            cat,
            limit,
            offset
        }
    })
}
//获取歌单分类
export function getSongCategories() {
    return request({
        url: "/playlist/catlist",
    })
}
//获取热门歌单
export function getHotSong() {
    return request({
        url: "/playlist/hot",
    })
}