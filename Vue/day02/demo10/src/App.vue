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
    showMsg() {
      console.log(this.username);
      console.log(this.password);
      this.$axios.post("user", `username=${this.username}&password=${this.password}`)
        .then(res => (this.msg = res.data));

      //   var params=new URLSearchParams();
      //   params.append('username',this.username);
      //   params.append('password',this.password);
      //   this.$axios.post('user',params)
      //     .then(res => (document.getElementById("msg").innerText = res.data))
      //     .catch(err => console.log(err));
      // }
    }
  }
};
</script>
<style>

</style>
