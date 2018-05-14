<template>
  <div id="app">
    <p>应用于数组的方式：</p>
    <ul>
      <li v-for="(stu,index) in stus" v-bind:key="index">
        index:{{index}},stuName:{{stu.name}}
      </li>
    </ul>
    <hr>
    <p>应用于对象的方式：</p>
    <ul>
      <li v-for="(value,key,index) in person" :key="index">
        index:{{index}},key:{{key}},value:{{value}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stus: [{ name: "Merle", score: "A" }, { name: "Joesph", score: "B" }],
      person: { firstName: "Eulah", lastName: "Collins" }
    };
  }
};
</script>
<style>

</style>
