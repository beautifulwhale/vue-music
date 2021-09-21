import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//每日推荐歌曲
export function getEverySongs() {
    return request({
        url: "/recommend/songs",
        params: {
            cookie
        }
    })
}