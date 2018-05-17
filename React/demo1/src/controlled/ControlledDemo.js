import React, {Component} from 'react';

class ControlledDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ""}
    // this.changeInput = this.changeInput.bind(this);
  }

  changeInput(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.inputValue}
               onChange={(e) => this.changeInput(e)}
        />
        <br/>{this.state.inputValue}
      </div>
    );
  }
}

export default ControlledDemo;