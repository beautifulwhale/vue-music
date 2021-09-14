export default {
    clearSongList({ state, commit }) {
        commit('clearSongList')
    },
    getCloudPlayList({ commit }, payload) {
        commit('getCloudPlayList', payload);
    },
    updataLogin({commit},flag){
        commit('LoginStatus',flag)
    }
}