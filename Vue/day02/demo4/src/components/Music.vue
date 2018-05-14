<template>
  <div class="music">
    你好，欢迎来到音乐站点。
    <br>
    <button @click="toMovie">前往电影站点</button> <br>
    <button @click="goBack">返回主站点</button>
    <button @click="toNext">返回下一页</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toMovie() {
      this.$router.push({
        name: "movie"
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    toNext(){
      this.$router.go(1);
    }
  }
};
</script>
<style>
.music {
  background-color: #f56a00;
  box-shadow: 0px 0px 20px #f78e3d;
}
</style>
