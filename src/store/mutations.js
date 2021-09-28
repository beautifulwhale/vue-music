export default {
    changePlayMode(state, payload) {
        state.playMode = payload.num
    },
    getSongList(state, payload) {
        state.songList = payload
        console.log(state.songList)
    },
    //清空列表
    clearSongList(state) {
        state.songList = null;
        state.dailySongList = null
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
    },
    //获取每日推荐歌曲作为最近播放歌曲
    // getRecentSongs(state, payload) {
    //     state.dailySongList = payload
    // }
}