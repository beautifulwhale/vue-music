import { request } from './request'
//手机登录
export function phoneLogin(phone, password) {
    return request({
        url: "/login/cellphone",
        method: 'POST',
        data: {
            phone,
            password
        }
    })
}
//二维码key生成接口
export function getLoginKey(){
    return request({
        url: "/login/qr/key",
    })
}
//二维码生成接口
export function getLoginQrCode(key){
    return request({
        url: "/login/qr/create",
        params:{
            key
        }
    })
}
// 二维码检测扫码状态接口
export function CheckQrCode(key){
    return request({
        url: "/login/qr/check",
        params:{
            key
        }
    })
}