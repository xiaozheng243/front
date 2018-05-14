<template>
  <div id="footer">
   {{footerText}}
   <br>
   <button @click="showMsg">点击显示从父组件中获取的信息</button>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    showMsg() {
      alert(this.footerText);
    }
  },
  props: {
    footerText:String
  }
};
</script>
<style>
#footer {
  background-color: #f04134;
  box-shadow: 0 0 20px #f46e65;
  height: 200px;
  margin: 20px;
}
</style>
