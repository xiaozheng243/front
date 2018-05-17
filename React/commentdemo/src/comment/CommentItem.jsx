import React, { Component } from "react";

class CommentItem extends Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    return (
      <div>
        <h1>评论人：{this.props.name}</h1>
        <p>评论内容：{this.props.comment}</p>
      </div>
    );
  }
}
export default CommentItem;
