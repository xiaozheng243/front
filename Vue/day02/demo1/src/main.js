import Vue from 'vue';
import App from './App.vue';

Vue.filter('myFilter', function (value) {
    return "这是全局过滤器";
});
new Vue({
    el: '.app',
    render: creater => creater(App)
});