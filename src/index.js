import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox!!
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);


