import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取热门话题
export function getHotTopic(limit, offset) {
    return request({
        url: "/hot/topic",
        params: {
            limit,
            offset,
            cookie
        }
    })
}
//获取话题详情
export function getTopicDetail(actid) {
    return request({
        url: "/topic/detail",
        params: {
            actid,
            cookie
        }
    })
}
//获取话题详情热门动态
export function getTopicEvent(actid) {
    return request({
        url: "/topic/detail/event/hot",
        params: {
            actid,
            cookie
        }
    })
}