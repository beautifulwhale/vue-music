// 补0方法
export function formatZero(num, len) {
    if (String(num).length > len) return num
    return (Array(len).join(0) + num).slice(-len)
}

// 秒转00:00
export function FormatTime(t) {
    let m = parseInt((t % 3600) / 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(t % 60);
    s = s < 10 ? '0' + s : s;
    return m + ':' + s;
};

// 日期格式化
//传入timestamp时间戳
export function dateFormat(timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

// 使用es6的padStart()方法来补0
export function getYMDHMS(timestamp) {
    let time = new Date(timestamp)
    let year = time.getFullYear()
    const month = (time.getMonth() + 1).toString().padStart(2, '0')
    const date = (time.getDate()).toString().padStart(2, '0')
    return year + '-' + month + '-' + date
}


// 格式化时间毫秒转分秒
export function formatTime(time) {
    // 取整
    time = ~~time
    var formatTime
    if (time < 10) {
        formatTime = '00:0' + time
    } else if (time < 60) {
        formatTime = '00:' + time
    } else {
        var m = ~~parseInt((time % (1000 * 60 * 60)) / (1000 * 60))
        if (m < 10) {
            m = '0' + m
        }
        var s = ~~parseInt((time % (1000 * 60)) / 1000)
        if (s < 10) {
            s = '0' + s
        }
        formatTime = m + ':' + s
    }
    return formatTime
}


// 时间戳转换成几分钟前，几小时前，几天前
export function formatMsgTime(dateTimeStamp) {
    var result = ''
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) return
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前'
    } else {
        result = '刚刚'
    }
    return result
}


//随机数组排序
export function getRadomIndex(m, n) {
    return Math.floor(Math.random() * (n - m)) + m
}


/**
* 数字转整数 如 100000 转为10万
* param {需要转化的数} num
* param {需要保留的小数位数} point
*/
export function tranNumber(num) {
    num = Number(num);
    if (num == 0) {
        return num + '';
    } else
        if (num > 1 && num < 10000) {
            return num + '';
        } else {
            return (num / 10000).toFixed(0) + '万';
        }
}

// export function tranNumber(num, point) {
//     let numStr = num.toString()
//     // 十万以内直接返回
//     if (numStr.length < 6) {
//         return numStr
//     }
//     //大于8位数是亿
//     else if (numStr.length > 8) {
//         let decimal = numStr.substring(
//             numStr.length - 8,
//             numStr.length - 8 + point
//         )
//         return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
//     }
//     //大于6位数是十万 (以10W分割 10W以下全部显示)
//     else if (numStr.length > 5) {
//         let decimal = numStr.substring(
//             numStr.length - 4,
//             numStr.length - 4 + point
//         )
//         return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
//     }
// }