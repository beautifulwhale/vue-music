export default {
    //获取当前列表的条数
    songListLength(state) {
        if (state.songList != null) {
            return state.songList.length
        }
    },
}