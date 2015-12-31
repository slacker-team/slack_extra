import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        hogehoge
      </div>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
