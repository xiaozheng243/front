import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 10
    },
    mutations: {
        add(state) {
            state.num++
        },
        sub(state) {
            state.num--
        }
    },
    getters: {
        num(state) {
            return state.num += 10
        }
    },
    actions: {
        addplus(context) {
            context.commit('add')
            setTimeout(() => {
                console.log("定时器结束，我执行了！")
            }, 1500);
            console.log("这条语句在定时器顺序之后，但因为actions是异步的，所以我先执行了！")
        },
        subplus({ commit }) {
            commit('sub')
        }
        // ,
        // async anotheradd({ dispatch, commit }) {
        //     await dispatch('addplus')
        //     commit('sub')
        // }
    }
})
export default store;