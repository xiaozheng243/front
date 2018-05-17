import React, { Component } from "react";
import './state-demo.css'
class StateDemo extends Component {
  constructor(props) {
    super(props);
    this.clickCounter=this.clickCounter.bind(this);
    this.clickReduce = this.clickReduce.bind(this);
    this.state = { count: this.props.count };
  }
  clickCounter(){
      this.setState({count:this.state.count+1});
  }
  clickReduce(){
      this.setState({count:this.state.count-1});
  }
  render(){
      return(
          <div className="state-demo">
              {this.props.name}:{this.state.count}
              <button onClick={this.clickCounter}>+</button>
              <button onClick={this.clickReduce}>-</button>
          </div>
      );
  }
}
export default StateDemo;