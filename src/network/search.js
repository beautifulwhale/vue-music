import { request } from './request'
//获取默认搜索关键字
export function getDefaultKeyWords() {
    return request({
        url: "/search/default",
    })
}
//获取热搜榜(详细)
export function getHotSearch() {
    return request({
        url: "/search/hot/detail",
    })
}
//搜索
export function getSearchCotent(keywords, limit, offset, type) {
    return request({
        url: "/cloudsearch",
        params: {
            keywords,
            limit,
            offset,
            type
        }
    })
}