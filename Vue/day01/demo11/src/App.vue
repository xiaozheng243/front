<template>
  <div id="app">
    {{faCount}}
    <Footer @faAdd="faAddPlus" />
    <Footer @faAdd="faAddPlus" />
  </div>

</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      faCount: 0
    };
  },
  components: {
    Footer
  },
  methods: {
    faAddPlus() {
      this.faCount += 1;
    }
  }
};
</script>
<style>

</style>
