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