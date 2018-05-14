<template>
  <div class="detail">
    详情表
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query);
  }
};
</script>
<style>
.detail {
  background-color: #f56a00;
  box-shadow: 0px 0px 20px #f78e3d;
}
</style>
