<template>
    <div id=app>
        <h2>v-text</h2>
        <h3>v-text="绑定文本"，可以指定文本，等价于直接使用{\{message}}</h3>
        <div v-text='text'></div>
        <div id="title" v-bind:title="dateMsg">{{message}}</div>
        <hr>
        <h2>v-html</h2>
        <h3>v-html获得的文本将会渲染HTML标签，直接写的文本不会渲染HTML标签</h3>
        <div>{{htmlText}}</div>
        <div id="html" v-html="htmlText"></div>
        <hr>
        <h2>v-if</h2>
        <h3>v-if会判断获得变量，如果为true就会执行显示DOM,否则直接不渲染该DOM节点</h3>
        <div id="if" v-if="flag">
            你是否能看到我？
        </div>
        <hr>
        <h2>v-show</h2>
        <h3>v-show和v-if很像，不过无论v-show显示不显示该DOM节点内容，都会渲染该DOM节点</h3>
        <div id="show" v-show="isShow">不管你看不看的见我，你都你能在DOM中看到我</div>
        <hr>
        <h2>v-model</h2>
        <h3>v-model用于绑定多处DOM节点的内容，一处改变，另一处也改变</h3>
        <div id="model">
            <span>{{modelText}}</span><br>
            <input type="text" v-model="modelText">
        </div>
        <hr>
        <h2>v-bind</h2>
        <h3>v-bind会给该DOM节点的指定属性赋值，v-bind可以省略成:</h3>
        <div id="bind">
            <input type="text" v-bind:value="valueText"><br>
            <input type="text" :value="valueText">
        </div>
        <div :class="color?'red':'green'">我是该红还是该绿呢？</div>
        <div :class="{'green':true,'big':bigFlag}">多class组成方式</div>
        <!-- :class="{color:stu.score<60?'red':'green','big':bigFlag}" -->
        <div id="stu">
            <ol>
                <li v-for="stu in stus" :key="stu.id" :class="{'A':'red','B':'green','C':'aqua'}[stu.score]">
                    {{stu.name}}:{{stu.score}}
                </li>
            </ol>
        </div>
        <hr>
        <h2>v-on</h2>
        <h3>v-on是事件触发器，后面会跟着触发的方式,可以简写为@click，字符串中是响应函数或者表达式，
            函数体需要在data()同级的methods中表述
        </h3>
        <button v-on:click="addStu" @dblclick="removeStu">点击添加学生信息</button>
    </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      text: "测试text",
      message: "你好，悬浮查看刷新时间！",
      dateMsg: `页面刷新时间：${new Date().toLocaleString()}`,
      htmlText: "<h3>v-html测试<h3>",
      flag: true,
      isShow: true,
      modelText: "Hello,Vue",
      valueText: "v-bind赋值",
      color: true,
      bigFlag: true,
      stus: [{ name: "Jack", score: "A" }, { name: "Tom", score: "B" }],
      onText: "Hello,Vue!"
    };
  },
  methods: {
    addStu() {
      this.stus.push({
        name: "Lisa",
        score: "C"
      });
    }
  }
};
</script>
<style>
#if,
#show {
  height: 50px;
  width: 200px;
  background-color: aqua;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.big {
  font-size: 20px;
}
.aqua {
  background-color: aqua;
}
</style>