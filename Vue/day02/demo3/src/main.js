import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            name: 'list',
            path: '/list',
            component: List
        },
        // {
        //     name: 'detail',
        //     path: '/detail/:id',
        //     component: Detail
        // },
        {
            name: 'detail',
            path: '/detail',
            component: Detail
        }

    ]
});
new Vue({
    el: '.app',
    router,
    render: creater => creater(App)
});