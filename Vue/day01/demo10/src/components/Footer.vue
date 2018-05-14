<template>
  <div id="footer">
    <button @click="sendMsg">向父组件发送信息</button>
    {{footerText}}
  </div>
</template>
<script>
import connect from "../connector.js";
export default {
  data() {
    return {};
  },
  methods: {
    sendMsg() {
      connect.$emit("pre", "你好，这是来自Footer的信息！");
    }
  },
  props: ["footerText"]
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
