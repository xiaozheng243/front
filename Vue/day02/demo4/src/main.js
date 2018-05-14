import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Movie from './components/Movie.vue';
import Music from './components/Music.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            name: 'movie',
            path: '/my-movie',
            component: Movie
        },
        {
            name: 'music',
            path: '/my-music',
            component: Music
        },
        {
            name: 'home',
            path: '/my-home',
            component: App
        }
    ]
});
new Vue({
    el: '.app',
    router,
    render: creater => creater(App)
});