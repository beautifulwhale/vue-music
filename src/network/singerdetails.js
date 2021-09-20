import { request } from './request'
//获取歌手详情
export function getSingerDetails(id) {
    return request({
        url: "/artist/detail",
        params: {
            id
        }
    })
}
//获取歌手全部歌曲
export function getSingerMusic(id) {
    return request({
        url: "/artist/songs",
        params: {
            id
        }
    })
}
//获取歌手全部专辑
export function getSingerAlbum(id, limit, offset) {
    return request({
        url: "/artist/album",
        params: {
            id,
            limit,
            offset
        }
    })
}
//获取歌手MV
export function getSingerMv(id) {
    return request({
        url: "/artist/mv",
        params: {
            id
        }
    })
}
//获取歌手介绍
export function getSingerDesc(id) {
    return request({
        url: "/artist/desc",
        params: {
            id
        }
    })
}
//获取相似歌手
export function getSimiSinger(id) {
    return request({
        url: "/simi/artist",
        params: {
            id
        }
    })
}