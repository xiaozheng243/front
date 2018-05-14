<template>
  <div>
    <div id="app">
      <button @click="toMusic">前往音乐站点的告白气球</button><br>
      <button @click="toMovie">前往电影站点</button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toMusic() {
      this.$router.push({
        name: "music",
        query: { id: 1001, name: "Love" }
      });
    },
    toMovie(){
      this.$router.push({
        name:'movie'
      });
    }
  }
};
</script>
<style>
#app {
  background-color: #108ee9;
  box-shadow: 0px 0px 20px #add8f7;
}
.show {
  background-color: #bfbfbf;
}
</style>
