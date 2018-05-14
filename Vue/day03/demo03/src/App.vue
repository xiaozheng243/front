<template>

  <div>

    {{sum}}
    <br>
    <mt-button type="primary" @click="addSum">点击+1</mt-button>

    <div v-for="(person,index) in persons" :key="index">
      {{person.name}}:{{person.age}}
    </div>
    <mt-button type="primary" @click="changePersons">修改成员</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sum: 20,
      persons: [{ name: "Tom", age: 21 }, { name: "Jack", age: 23 }]
    };
  },
  methods: {
    addSum() {
      this.sum = this.sum + 1;
    },
    changePersons() {
      this.persons[0].name = "Dee";
    }
  },
  watch: {
    sum: function(newValue, oldValue) {
      console.log("sum被修改了！");
    },
    persons: {
      handler: function(newValue, oldValue) {
        console.log("persons被修改了！");
      },
      deep: true
    }
  }
};
</script>
<style>

</style>
