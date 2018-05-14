<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <Sub>
      <p>这是普通文本1</p>
      <p>这是普通文本2</p>
      <p slot="footer">这是底部标题</p>
      <p slot="body">这是主文件信息</p>
      <p slot="header">这是头标题</p>
    </Sub>
  </div>
</template>
<script>
import Sub from "./components/Sub.vue";
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {
    Sub
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
