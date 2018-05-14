<template>
  <div id="app">
    <div>头文件列表</div>
    <div class="show">
      <router-link :to="{name:'list'}">列表</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
