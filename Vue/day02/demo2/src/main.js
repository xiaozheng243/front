import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '.app',
    render: creater => creater(App)
});

function sum(creater) {
    return creater(App);
}