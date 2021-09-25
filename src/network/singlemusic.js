import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取歌曲详情
export function getMusicDetails(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids,
            cookie
        }
    })
}
//获取歌词
export function getLyric(id) {
    return request({
        url: "/lyric",
        params: {
            id,
            cookie
        }
    })
}
//获取相似音乐
export function getSimiMusic(id) {
    return request({
        url: "/simi/song",
        params: {
            id,
            cookie
        }
    })
}
//获取单曲评论
export function getMusicComment(id, limit, offset) {
    return request({
        url: "/comment/music",
        params: {
            id,
            limit,
            offset,
            cookie
        }
    })
}