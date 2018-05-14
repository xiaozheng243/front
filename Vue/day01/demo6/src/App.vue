<template>
  <div id="app">
    <p>学生成绩列表</p>
    <ul>
      <li v-for="(stu,index) in stus" :key="index" :class="{'A':'red','B':'green','C':'orange','D':'purple','box':true}[stu.score]">
        {{stu.name}},{{stu.score}}
        <button @click="rmStu(index)">删除</button>
      </li>
    </ul>
    <div>
      <p>添加英雄</p>
      学生姓名：<input type="text" name="name" v-model="name"><br>
      学生成绩：<input type="text" name="name" v-model="score"><br>
      <button @click="addStu">添加学生</button><br>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      score: "",
      rname:'',
      stus: [
        {
          id: 1,
          name: "Heather",
          score: "A"
        },
        {
          id: 2,
          name: "Dulce",
          score: "B"
        },
        {
          id: 3,
          name: "Wilmer",
          score: "C"
        },
        {
          id: 4,
          name: "Harry",
          score: "D"
        }
      ]
    };
  },
  methods:{
    addStu(){
      this.stus.push({
        name:this.name,
        score:this.score,
      });
      this.name='';
      this.score='';
    },
    rmStu(index){
      this.stus.splice(index,1);
    }
  }
};
</script>
<style>
.bpurple {
  background-color: #5670f3;
  box-shadow: 0 4px 25px -4px #5670f3;
  width:200px;
}
.red {
  background-color: #f04134;
  box-shadow: 0 0 20px #f46e65;
  width:200px;
}
.green {
  background-color: #00a854;
  box-shadow: 0 0 20px #76d0a3;
  width:200px;
}
.blue {
  background-color: #108ee9;
  box-shadow: 0px 0px 20px #add8f7;
  width:200px;
}
.pink {
  background-color: #f5317f;
  width:200px;
}
.orange {
  background-color: #f56a00;
  box-shadow: 0px 0px 20px #f78e3d;
  width:200px;
}
.purple {
  background-color: #7265e6;
  width:200px;
}
.cyan {
  background-color: #00a2ae;
  box-shadow: 0px 4px 20px -4px #76cdd3;
  width:200px;
}
.grey {
  background-color: #bfbfbf;
  width:200px;
}
.yellow {
  background-color: #ffbf00;
  box-shadow: 0px 4px 20px -3px #ffce3d;
  width:200px;
}
.box {
  width: 200px;
}
</style>
