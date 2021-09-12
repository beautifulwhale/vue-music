import { request } from './request'
//推荐歌单
export function getRecomPlayList() {
    return request({
        url: "/personalized?limit=18",
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