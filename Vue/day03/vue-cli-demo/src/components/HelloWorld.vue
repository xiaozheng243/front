<template>
  <div class="hello">
    <div>{{count}}</div>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('sub')">-</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
  computed: mapState(["count"])
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
