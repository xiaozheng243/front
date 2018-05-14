import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainHeader from './components/MainHeader.vue';
import MainBody from './components/MainBody.vue';
import MainFooter from './components/MainFooter.vue';
Vue.component('HeaderVue', Header);
Vue.component('FooterVue', Footer);

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            name: 'home',
            path: '/home',
            components: {
                mainheader: MainHeader,
                mainbody: MainBody,
                mainfooter: MainFooter
            }
        },
        {
            name: 'home',
            path: '/',
            component: Home
        }
    ]
});
new Vue({
    el: '.app',
    router,
    render: creater => creater(Home)
});