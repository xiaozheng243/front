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