import { request } from './request'
//轮播图
export function getBanner(type) {
    return request({
        url: "/banner",
        params:{type}
    })
}
//推荐歌单
export function getRecomPlayList() {
    return request({
        url: "/personalized?limit=15",
    })
}
//推荐歌曲
export function getRecomSongList() {
    return request({
        url: "/personalized/newsong"
    })
}

//推荐歌手
export function getRecomSingerList() {
    return request({
        url: "/top/artists?limit=18"
    })
}