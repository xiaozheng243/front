//vue的HTML模板文件，只能有一个根节点
<template> 
  <div>
    <span v-bind:title="message1">悬浮查看刷新时间</span>   <br>
    {{text}} <br>

    <input type="text" v-model="text">
    <br>

  <ol>
    <li v-for="fruit in fruits" :key="fruit.id">
      {{fruit.name}}
    </li>
  </ol>

<span v-if="flag">你能看见我吗？</span>
<br>
<span>{{message2}}</span>
<br>
<button v-on:click="reverse">反转字符</button>
  </div>
</template>
//vue的脚本文件
<script>
export default {
  name: "App",
  data() {
    return {
      text: "Hello,World!",
      message1: `页面加载于${new Date().toLocaleString()}`,
      fruits: [
        { id: 0, name: "苹果" },
        { id: 1, name: "香蕉" },
        { id: 2, name: "橙子" }
      ],
      flag: true,
      message2:"Hello,Vue!"
    };
  },
  methods:{
    reverse(){
      this.message2=this.message2.split('').reverse().join('')
    }
  }
};
</script>
//css文件
<style>
#test {
  color: aqua;
}
</style>
