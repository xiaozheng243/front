import Vue from 'vue';
import App from './App.vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Body from "./components/Body.vue";
Vue.component('Header', Header);
Vue.component('Body', Body);
Vue.component('Footer', Footer);
new Vue({
    el: '#app',
    render: creater => creater(App)
});