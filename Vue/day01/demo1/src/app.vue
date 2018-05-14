//vue的HTML模板文件，只能有一个根节点
<template> 
<div id="text">
Hello,World <br>
{{text}}
</div>
</template>
//vue的脚本文件
<script>
export default {
  data() {
    return {
      text: "abc"
    };
  }
};
</script>
//css文件
<style>
#test {
  color: aqua;
}
</style>
