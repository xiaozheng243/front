import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count: 10
}
const mutations = {
    add(state) {
        state.count++
    },
    sub(state) {
        state.count--
    }
}
const store = new Vuex.Store({
    state,
    mutations
})
export default store;