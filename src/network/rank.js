import { request } from './request'
//获取排行榜
export function getRank() {
    return request({
        url: "/toplist",
    })
}