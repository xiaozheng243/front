import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import NotFound from './NotFound.vue';
import Home from './Home.vue';
Vue.use(VueRouter);

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
            name: 'notFound',
            path: '*',
            component: NotFound
        }
    ]
});

new Vue({
    el: '.app',
    router,
    render: creater => creater(App)
});