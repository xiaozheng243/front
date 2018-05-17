import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickConter from "./ClickConter";
import StateDemo from './StateDemo';
import ControlledDemo from './controlled/ControlledDemo';
import PropsDemo from './props/PropsDemo';
import StateDemo1 from './state/StateDemo.jsx';
//7.调用其他组件
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <StateDemo count={0} name="count1"/>
        <StateDemo count={10} name="count2"/>
        <StateDemo count={40} name="count3"/>
        <hr/>
        <ClickConter/>
        <hr/>
        <ControlledDemo/>
        <hr/>
        <PropsDemo/>
        <hr/>
        <StateDemo1/>
      </div>
    );
  }
}

export default App;