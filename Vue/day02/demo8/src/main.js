import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Music from './components/Music.vue';
import Oumei from './components/Oumei.vue';
import Guochan from './components/Guochan.vue';
import Home from './components/Home.vue';
// import App from './components/App.vue';
Vue.use(VueRouter);
Vue.component('HeaderVue', Header);
Vue.component('FooterVue', Footer);
// Vue.component('HomeVue',Home);
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },

        {
            name: 'music',
            path: '/music',
            component: Music,
            children: [{
                    name: 'oumei',
                    path: 'oumei',
                    component: Oumei
                },
                {
                    name: 'guochan',
                    path: 'guochan',
                    component: Guochan
                },
            ]
        }
    ]
});

new Vue({
    el: '.app',
    router,
    render: c => c(Home)
});