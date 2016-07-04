/// <reference path="../../typings/tsd.d.ts" />

// ES6 syntax, compiled to ES5 require syntax by babel-preset-es2015, however we need requirejs to run it
//import React from 'react';
//import ReactDOM from 'react-dom';
//
// It seems we have to use requirejs the normal way since script must be run in loaded callback ...
// Hassle, we do it with Webpack in that project instead

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <p>
          Hello World! Iam {this.props.name}
        </p>
        <p>
          The JSX compilation is done with the help of gulp-babel in gulpfile.js and babel-preset-react in.babelrc file
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld name="a compiled React Component" />, document.getElementById('react-example')
);