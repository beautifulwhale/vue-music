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
//获取热门歌单分类
export function getHotSong() {
    return request({
        url: "/playlist/hot",
    })
}
//获取精品歌单标签列表
export function getGoodTags() {
    return request({
        url: "/playlist/highquality/tags",
    })
}
//获取精品歌单
export function getGoodPlayList(cat, limit) {
    return request({
        url: "/top/playlist/highquality",
        params: {
            cat,
            limit
        }
    })
}
//获取新歌速递
export function getNewSongs(type) {
    return request({
        url: "/top/song",
        params: {
            type
        }
    })
}
//获取新碟上架
export function getNewAlbums(limit, offset, area) {
    return request({
        url: "/top/album",
        params: {
            limit, offset, area
        }
    })
}