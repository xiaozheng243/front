import Vue from 'vue';
import App from './App.vue';
import Footer from "./components/Footer.vue";
Vue.component('Footer', Footer);
new Vue({
    el: '#app',
    render: creater => creater(App)
});