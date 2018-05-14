<template>

  <div>
    <mt-button type="primary" @click="showMsg">请求数据</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    showMsg() {
      
      this.$axios.get("user", {
          params: {
            username: "suiyu",
            password: "123456"
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>

</style>
