export default {
    changePlayMode(state,payload){
        state.playMode = payload.num
    },
    getSongList(state,payload){
        state.songList = payload
    },
    //清空列表
    clearSongList(state){
        state.songList = null;
    },
    isPlay(state,flag){
        state.isPlay = flag
    }
}