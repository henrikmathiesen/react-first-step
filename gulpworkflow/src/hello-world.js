/// <reference path="../../typings/tsd.d.ts" />

// ES6 syntax, compiled to ES5 require syntax by babel-preset-es2015, however we need requirejs to run it
//import React from '../../bower_components/react/react';
//import ReactDOM from '../../bower_components/react/react-dom';
//
// It seems we have to use requirejs the normal way since script must be run in loaded callback ...
// Hassle, we do it with Webpack in that project instead
// Require does its stuff at runtime, webpack imports at build time -- i think... , better


var HelloWorld = React.createClass({
  render: function () {
    const { name } = this.props;

    return (
      <div>
        <p>
          Hello World!Iam {name}
        </p>
        <p>
          The JSX compilation is done with the help of gulp-babel in gulpfile.js and babel-preset-react in.babelrc file
        </p>
      </div>
    );
  }
});

console.log(window.HelloWorld);

var aClass = new AClass();
console.log(aClass.foo());

console.log(window.AClass);

// Will not work since xClass.js is loaded (via wild card) after this file
// var xClass = new Xclass();
// console.log(xClass.foo());

ReactDOM.render(
  <HelloWorld name="a compiled React Component" />, document.getElementById('react-example')
);