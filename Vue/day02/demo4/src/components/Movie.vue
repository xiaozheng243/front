<template>
  <div class="movie">
   你好，欢迎来到电影站点！ <br>
   <button @click="toHome">返回主站点</button> <br>
   <button @click="goBack">返回上一页</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    toHome(){
      this.$router.push({name:'home'});
    },
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.list {
  background-color: #00a2ae;
  box-shadow: 0px 4px 20px -4px #76cdd3;
}

.bpurple {
  background-color: #5670f3;
  box-shadow: 0 4px 25px -4px #5670f3;
}
.red {
  background-color: #f04134;
  box-shadow: 0 0 20px #f46e65;
}
.green {
  background-color: #00a854;
  box-shadow: 0 0 20px #76d0a3;
}
.blue {
  background-color: #108ee9;
  box-shadow: 0px 0px 20px #add8f7;
}
.pink {
  background-color: #f5317f;
  /* box-shadow:0px 4px 20px #f00; */
}
.orange {
  background-color: #f56a00;
  box-shadow: 0px 0px 20px #f78e3d;
}
.purple {
  background-color: #7265e6;
  /* box-shadow:0px 4px 20px #f00; */
}
.cyan {
  background-color: #00a2ae;
  box-shadow: 0px 4px 20px -4px #76cdd3;
  /* box-shadow:0px 4px 20px #f00; */
}
.grey {
  background-color: #bfbfbf;
  /* box-shadow:0px 4px 20px #f00; */
}
.yellow {
  background-color: #ffbf00;
  box-shadow: 0px 4px 20px -3px #ffce3d;
}
</style>
