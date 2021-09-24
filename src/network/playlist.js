import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//更新歌单名
export function updatePlayList(id, name, desc, tags) {
    return request({
        url: "/playlist/update",
        params: {
            id,
            name,
            desc,
            tags,
            cookie
        }
    })
}