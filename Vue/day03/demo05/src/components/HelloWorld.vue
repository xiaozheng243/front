<template>
  <div class="hello">
    <div>{{count}}</div>
    <button @click="add({num1:10,num2:2})">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  // computed:mapState({
  //   count:state=>state.count
  // }),
  methods: mapMutations(["add", "sub"])

    // ...mapMutations({
    //   add: "add",
    //   sub: "sub"
    // })
  
  // computed: mapState({
  //   count: state => state.count,
  //   anthorcount: "count",
  //   countsum: function(state) {
  //     return state.count + this.num;
  //   }
  // })
};
</script>
<style></style>
