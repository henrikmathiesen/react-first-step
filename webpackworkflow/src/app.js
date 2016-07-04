import React from 'react'
import ReactDOM from 'react-dom'

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <p>
          Hello World! Iam {this.props.name}
        </p>
        <p>
          The JSX compilation is done with the help of webpack
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld name="a compiled React Component" />, document.getElementById('react-example')
);