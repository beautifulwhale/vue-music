import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');

//获得专辑内容
export function getAlbumContent(id) {
    return request({
        url: "/album",
        params: {
            id,
            cookie
        }
    })
}
//获得专辑评论
export function getAlbumComment(id, limit, offset) {
    return request({
        url: "/comment/album",
        params: {
            id,
            limit,
            offset,
            cookie
        }
    })
}
//收藏/取消收藏专辑
export function collectAlbum(id, t) {
    return request({
        url: "/album/sub",
        params: {
            id,
            t,
            cookie
        }
    })
}
//获取已收藏专辑列表
export function MyCollectAlbum(limit, offset) {
    return request({
        url: "/album/sublist",
        params: {
            limit,
            offset,
            cookie
        }
    })
}