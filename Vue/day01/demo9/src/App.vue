<template>
  <div id="app">
    <Header headerText="1.我是App组件的header" />
    <Body v-bind="person" />
    <Footer :footerText="footerText" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerText: "3.我是App组件的Footer",
      person: {
        name: "suiyu",
        age: 23,
        class:'a',
      }
    };
  }
};
</script>
<style>
#app {
  background-color: #5670f3;
  box-shadow: 0 4px 25px -4px #5670f3;
  height: 700px;
  margin: 20px;
}
.a {
  color: red;
}
.b {
  font-size: 50px;
}
</style>
