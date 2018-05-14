<template>
<div class="footer">
  {{footerText}}
</div>
</template>
<script>
export default {
  data() {
    return {
      footerText: "你好,这是子组件！"
    };
  }
};
</script>
<style>
.footer {
  background-color: #f04134;
  box-shadow: 0 0 20px #f46e65;
  width: 200px;
  height: 200px;
}
</style>
