import Vue from 'vue';
import App from './app.vue';
//引入文件
import "./assets/styles/test.css";
import './assets/styles/test.styl';
import './assets/imags/test.png';
const root = document.createElement("div");
document.body.appendChild(root);
new Vue({
    render: (creater) => creater(App)
}).$mount(root);