import React from "react";

class StateDemo extends React.Component {

    constructor(props){
        super(props);
        this.state={inputText:'默认值'}
    }
    inputChange=(e)=>{
        this.setState({
            inputText:e.target.value
        });
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.inputText} onChange={(e)=>this.inputChange(e)}/>
                <br/>
                <label htmlFor="i">{this.state.inputText}</label>
            </div>
        );
    }
}
export default StateDemo;