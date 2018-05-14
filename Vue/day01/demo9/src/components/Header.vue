<template>
  <div id="header">
   {{headerText}}
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: ['headerText']
};
</script>
<style>
#header {
  background-color: #00a854;
  box-shadow: 0 0 20px #76d0a3;
  height: 200px;
  margin: 40px 20px;
}
</style>
