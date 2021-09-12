import { request } from './request'
//获取mv
export function getMvPlay(id) {
    return request({
        url: "/mv/url",
        params: {
            id
        }
    })
}
//获取mv数据
export function getMvData(mvid) {
    return request({
        url: "/mv/detail",
        params: {
            mvid
        }
    })
}
//获取推荐mv
export function getRecomMv(id) {
    return request({
        url: "/related/allvideo",
        params: {
            id
        }
    })
}
//获取视频点赞转发评论数数据
export function getMvLiked(vid) {
    return request({
        url: "/video/detail/info",
        params: {
            vid
        }
    })
}
//获取mv评论
export function getMvComment(id) {
    return request({
        url: "/comment/mv",
        params: {
            id
        }
    })
}
//获取视频地址
export function getVideoUrl(id) {
    return request({
        url: "/video/url",
        params: {
            id
        }
    })
}
//获取视频详情
export function getVideoDetails(id) {
    return request({
        url: "/video/detail",
        params: {
            id
        }
    })
}
//获取视频评论
export function getVideoComment(id) {
    return request({
        url: "/comment/video",
        params: {
            id
        }
    })
}