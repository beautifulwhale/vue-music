export default {
    changePlayMode(state, payload) {
        state.playMode = payload.num
    },
    getSongList(state, payload) {
        state.songList = payload
    },
    //清空列表
    clearSongList(state) {
        state.songList = null;
    },
    isPlay(state, flag) {
        state.isPlay = flag
    },
    LoginStatus(state, flag) {
        state.isLogin = flag
    },


    setToken(state, data) {
        state.token = data
        window.sessionStorage.setItem("token", data);
    },
    setUserImg(state, data) {
        state.avatarUrl = data
        window.sessionStorage.setItem("avatarUrl", data);
    },
    setNickName(state, data) {
        state.nickname = data
        window.sessionStorage.setItem("nickname", data);
    }
}