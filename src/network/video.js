import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');

//获取全部视频
export function getAllVideo(offset) {
    return request({
        url: "/video/timeline/all",
        params: {
            offset,
            cookie
        }
    })
}
//获取视频标签列表
export function getVideoLabel() {
    return request({
        url: "/video/group/list"
    })
}
//获取视频分类列表
export function getVideoCate() {
    return request({
        url: "/video/category/list",
        params: {
            cookie
        }
    })
}
//获取视频标签/分类下的视频
export function getVideo(id, offset) {
    return request({
        url: "/video/group",
        params: {
            cookie,
            id,
            offset
        }
    })
}