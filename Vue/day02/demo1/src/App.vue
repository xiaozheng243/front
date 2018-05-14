<template>
  <div id="app">
    <input type="text" v-model="ftext">
    <br>
    {{ftext | myFilter}}

    <br>
    <Footer />
  </div>

</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  filters: {
    myFilter: function(value) {
      return value == "" ? "" : value + "，你好";
    }
  },
  data() {
    return {
      ftext: ""
    };
  },
  components:{
    Footer
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
</style>
