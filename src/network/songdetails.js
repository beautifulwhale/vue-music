import { request } from './request'
//获取歌单详情
export function getPlayListDetails(id) {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}
//获取歌曲详情
export function getSongDetails(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}
//获取收藏歌单者
export function getPlayListCollect(id) {
    return request({
        url: "/playlist/subscribers?limit=28",
        params: {
            id
        }
    })
}
//相关歌单推荐
export function getRelated(id) {
    return request({
        url: "/related/playlist",
        params: {
            id
        }
    })
}
//获取歌单评论
export function getComment(id, offset, limit) {
    return request({
        url: "/comment/playlist",
        params: {
            id,
            offset,
            limit
        }
    })
}

//获取歌曲的url
export function getMusicUrl(id) {
    return request({
        url: "/song/url",
        params: {
            id
        }
    })
}