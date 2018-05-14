<template>
  <div id="app">
    <form action="user" method="post">
      <label for="username">姓名：</label>
      <input type="text" id="username" name="username" v-model="username"><br>
      <label for="password">密码:</label>
      <input type="text" id="password" name="password" v-model="password" @blur="showMsg"> <br>
      <button type="submit">提交</button>
    </form>
    <div id="msg">{{msg}}</div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "App",
  data() {
    return {
      msg: "",
      username: "",
      password: ""
    };
  },
  methods: {
    showMsg() {
      var url = this.HOST + "/jsptest/user";
      console.log(url);
      this.$axios
        .post(
          url,
          qs.stringify({
            username: this.username,
            password: this.password
          })
        )
        .then(function(res) {
          console.log(res);
          this.msg = res.data;
          console.log(this.msg);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
