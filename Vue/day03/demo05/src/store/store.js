import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        add(state, num) {
            state.count = (state.count + num.num1) * num.num2
        },
        sub(state) {
            state.count--
        }
    },
    getters: {
        count(state) {
            return state.count += 10
        }
    }
})
export default store;