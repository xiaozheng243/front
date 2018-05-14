<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{total}}</p>
    <Demo1 @increment='incrementTotal' />
    <Demo1 @increment='incrementTotal' />
    <Demo1 @increment='incrementTotal' />
  </div>
</template>
<script>
import Demo1 from "./components/demo1.vue";
export default {
  name: "App",
  data() {
    return {
      total: 0
    };
  },
  methods: {
    incrementTotal() {
      this.total += 1;
    }
  },
  components: {
    Demo1
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
