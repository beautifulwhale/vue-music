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