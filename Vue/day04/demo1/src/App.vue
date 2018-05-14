<template>
  <div id="app">
    <div>{{num}}</div>
    <button @click="add">增加</button>
    <input type="text">
    <input type="text" v-focus>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 20
    };
  },
  methods: {
    add() {
      this.num++;
    }
  },
  directives:{
    focus:{
      inserted(el){
        el.focus();
      }
    }
  }
};
</script>

<style></style>
