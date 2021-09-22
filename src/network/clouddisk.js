import { request } from './request'
import Cookies from 'js-cookie'
const cookie = Cookies.get('userCookie');
//获取用户云盘
export function getUserCloud() {
    return request({
        url: "/user/cloud",
        params: { cookie }
    })
}
//上传音乐到云盘
export function uploadMusicCloud(formData) {
    return request({
        url: "/cloud",
        method: 'post',
        data: { cookie, formData },
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}