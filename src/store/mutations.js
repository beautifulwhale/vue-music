export default {
    changePlayMode(state,payload){
        state.playMode = payload.num
    },
    getSongList(state,payload){
        state.songList = payload
        console.log(state.songList)
    },
    //清空列表
    clearSongList(state){
        state.songList = null;
    }
}