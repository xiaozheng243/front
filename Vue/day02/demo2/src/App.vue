<template>
  <div id="app">
    <Footer ref="footer" />
    <br>
    <div ref="myDiv"></div>
    <br>
    {{divtext}}
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      divtext: "你好"
    };
  },
  components: {
    Footer
  },
  created() {
    //组件创建后，数据已经初始化完毕，但是DOM还未生成
    console.log("created:", this.$refs.myDiv);
    // console.log("created", this.$refs.Footer.$el.innerHTML="父组件改变子组件的DOM");
    // console.log("created", this.$refs.Footer.$el.);
  },
  mounted() {
    console.log("footer:", this.$refs.footer); //获取子组件，其类别是vue component
    console.log("footer:", this.$refs.footer.$el); //获取子组件的DOM内容
    console.log(
      "footer:",
      (this.$refs.footer.$el.innerHTML =
        "<h3>子组件的内容被父组件通过改变DOM的形式改变了</h3>")
    ); //获取子组件的DOM内容
    //数据装载在DOM上后，各种数据已经准备就绪，将数据渲染到DOM上，DOM已经生成
    console.log("mounted:", this.$refs.myDiv);
    this.$refs.myDiv.innerHTML = "<h2>Hello,通过改变DOM来改变内容</h2>";
    this.divtext = "通过修改变量的属性改变DOM";
  }
};
</script>
<style>

</style>
