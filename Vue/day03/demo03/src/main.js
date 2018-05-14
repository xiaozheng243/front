// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import MintUI from 'mint-ui'
// import { Button, Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App.vue'
// import VueRouter from 'vue-router'
import Axios from 'axios'
import { Field, Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
// // Vue.use(MintUI)
// Vue.use(VueRouter)
// Axios.defaults.baseURL = 'http://localhost:8080/jsptest/';
// Axios.interceptors.request.use(function (config) {
//   console.log("开始请求数据！")
//   Indicator.open('加载中...');
//   return config;
// })
// Axios.interceptors.response.use(function (config) {
//   console.log("请求结束")
//   Indicator.close();
//   return config;
// })
// Vue.prototype.$axios = Axios
// Vue.component(Button.name, Button);
// const router = new VueRouter({
//   routes: [
//     {
//       name: 'home',
//       path: '',
//       component: App
//     }
//   ]
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: c => c(App)
})
