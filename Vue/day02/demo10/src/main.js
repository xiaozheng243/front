import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
Axios.defaults.baseURL = 'http://localhost:8080/jsptest/';
// Axios.defaults.headers.common['Authorizat' = AUTH_THOKEN];
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = Axios;//给对象原型挂载属性
new Vue({
    el: '.app',
    render: c => c(App)
});