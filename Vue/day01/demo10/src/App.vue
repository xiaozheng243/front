<template>
  <div id="app">
    <button @click="listen">监听子组件信息</button>
    <Footer :footerText="footerText"/>
    <div class="once">
        <span v-once>{{onceMsg}}</span><br>
        <span>{{moreMsg}}</span>
        <br>
        第一条语句：<input type="text" v-model="onceMsg"> <br>
        第二条语句：<input type="text" v-model="moreMsg">
    </div>
  </div>

</template>
<script>
import connect from "./connector.js";
export default {
  data() {
    return {
      onceMsg: "我的值在编译完之后不会改变！",
      moreMsg: "我的值和他不同，能够一直改变",
      footerText: "3.我是App组件的Footer"
    };
  },
  methods: {
    listen() {
      connect.$on("pre", function(msg) {
        console.log(msg);
      });
    }
  }
};
</script>
<style>
#app {
  background-color: #5670f3;
  box-shadow: 0 4px 25px -4px #5670f3;
  height: 700px;
  margin: 20px;
}
</style>
