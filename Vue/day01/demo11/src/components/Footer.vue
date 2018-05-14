<template>
  <div id="footer">
    <button @click="sonAdd">{{sonCount}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sonCount: 0
    };
  },
  methods: {
    sonAdd() {
      this.sonCount += 1;
      this.$emit("faAdd");
    }
  }
};
</script>
<style>
</style>
