<template>
    <div id="sub">
        <input type="text" v-model="message">
        <button @click="sendMessage">send</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test message"
    };
  },
  methods: {
    sendMessage() {
      this.$emit("fmessage", { message: this.message });
    }
  }
};
</script>

<style>

</style>
