import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取私人FM
export function getPersonalFm() {
    return request({
        url: "/personal_fm",
        params: {
            cookie
        }
    })
}