<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <br>
    <p v-for="(msg,index) in messages" :key="index">
      {{index}}: {{msg}}
    </p>
    <br>
    <Sub @fmessage="getMessage" />
  </div>
</template>

<script>
import Sub from "./components/Sub.vue";
export default {
  name: "App",
  data() {
    return {
      messages: []
    };
  },
  components: {
    Sub
  },
  methods: {
    getMessage(payload) {
      this.messages.push(payload.message);
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
