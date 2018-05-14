<template>
  <div id="body" class="c">
    我是App组件的body
    <br> {{name}}:{{age}}
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  props: {
    name: String,
    age: Number
  }
};
</script>
<style>
#body {
  background-color: #f56a00;
  box-shadow: 0px 0px 20px #f78e3d;
  height: 200px;
  margin: 20px;
}
/* .c{
  font-size: 50px;
} */
</style>
