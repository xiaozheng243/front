<template>
  <div>
    <form method="post" action="http://localhost:8080/jsptest/user">
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
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  created() {},
  methods: {
    getMsg(res1, res2) {
      console.log(res1);
      // console.log(res2);
      this.msg = res2;
    },
    showMsg() {
      console.log(this.username);
      console.log(this.password);
      this.$axios
        .all([
          this.$axios.get("user", {
            params: { username: this.username, password: this.password }
          }),
          this.$axios.post(
            "user",
            `username=${this.username}1&password=${this.password}1`
          )
        ])
        .then(this.getMsg)
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>

</style>
