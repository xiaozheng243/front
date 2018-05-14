<template>
  <div id="app">
   <Header/>
    <Body/>
    <Footer/>
  </div>
</template>
<script>
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
// import Body from "./components/Body.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}
  // components: {
  //   Header: Header,
  //   Body,
  //   Footer
  // }
};
</script>
<style>
#app {
  background-color: #5670f3;
  box-shadow: 0 4px 25px -4px #5670f3;
  height: 700px;
  margin: 20px;
}
</style>
