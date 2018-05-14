import Vue from 'vue';
import App from './App.vue';
// import AnthorApp from './AnthorApp';
new Vue({
    el: '#app',
    render: creater => creater(App)
});