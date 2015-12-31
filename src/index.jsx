
var React = require('react');

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
