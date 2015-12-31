
import React from 'react';

class CommentBox extends React.Component {
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
