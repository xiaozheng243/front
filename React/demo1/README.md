## 目录

1. controlled/ControlledDemo.js：State动态绑定
2. props/PropsDemo.js：props默认值与类型验证
3. state/StateDemo.jsx：其他写法

## 基础记录

### 引入
引入组件
```javascript
import React, { Component } from "react";
```
引入图片、css、自定义组件

```javascript
import logo from "./logo.svg";
import "./App.css";
import ClickConter from "./ClickConter";
```



```javascript
//1.从react中引入要使用的react组件
import React, {Component} from 'react';
//2.创建继承了Component的组件，首字母一般需要大写
class ClickConter extends Component {
//3.构造函数主要用于初始化state值
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {count: 0}
  }
//4.本类中需要用到的函数
  onClickButton() {
    this.setState({count: this.state.count + 1});
  }
//5.设置渲染节点的内容，只能有一个div节点，变量使用{}包括
  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>click</button>
        <br/>
        count:{this.state.count}
      </div>
    );
  }
}
//6.导出组件
export default ClickConter;
```

组件中的变量一般使用`{}`包括！

## state和props

state是针对的是组件内部的数据，props主要是组件对外提供的接口！

props：

props传递的值不可被修改，它可以传递变量，函数甚至组件本身！

```javascript
<StateDemo count={0} name="count1"/>
<StateDemo count={10} name="count2"/>
<StateDemo count={40} name="count3"/>
```

state：

在构造器中初始化state，state为对象

更改state时，使用setState函数。

```javascript
this.state = {count: 0}

this.setState({count: this.state.count + 1});
```

### props的默认值与校验

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsDemo extends Component {
  static defaultProps = {
    title: '默认title'
  }
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}
export default PropsDemo;
```
可以使用类的静态属性`defaultProps`定义props的默认值，当父组件没有传值时，就会使用默认值。
可以使用类的静态属性`propTypes`定义props的默认类型及是否必须