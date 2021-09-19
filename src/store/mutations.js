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
    //获取自己的关注的人
    getMyFousc(state, follows) {
        state.myFoucs = follows
    }
}