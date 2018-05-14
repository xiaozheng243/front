<template>
  <div class="goods">
    <mt-field label="商品单价" placeholder="商品单价" v-model="price"></mt-field>
    <mt-field label="商品数量" placeholder="商品数量" v-model="count"></mt-field>
    <br> {{sum.name}}总价：{{sum.price}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 0,
      count: 0
    };
  },
  methods: {},
  computed: {
    sum() {
      return {
        name: "香蕉",
        price: this.price * this.count
      };
    }
  }
};
</script>
<style>
</style>
