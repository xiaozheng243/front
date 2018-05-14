<template>
  <div class="hello">
    <div>{{num}}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <br>
    <button @click="addplus">+ plus</button>
    <button @click="subplus">- plus</button>
    <button @click="anotheradd">anotheradd</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    count:function(){
      return this.$store.state.a.count
    }
  },
  methods: {
    ...mapMutations(["add", "sub"]),
    ...mapActions(["addplus"]),
    ...mapActions({
      subplus: "subplus"
    })
  }
};
</script>
<style>

</style>
