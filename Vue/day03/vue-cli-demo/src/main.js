// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'

Vue.prototype.HOST = '/api'
// Axios.defaults.baseURL = 'http://localhost:8080/jsptest/';
Axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = Axios

new Vue({
  el: '#app',
  // store,
  render: c => c(App)
})
