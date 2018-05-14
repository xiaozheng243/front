import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {}
const mutations = {}
const moduleA = {
    state,
    mutations
},
const moduleB = {
    state: {},
    mutations: {}
}
const store = new Vuex.Store({
    a: moduleA,
    b: moduleB
})

export default store;