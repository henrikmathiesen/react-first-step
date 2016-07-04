var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          Hello World! Iam {this.props.name}
        </p>
        <p>
          The JSX compilation is done with the help of gulp-babel in gulpfile.js and babel-preset-react in .babelrc file
        </p>
      </div>
    );
  }
});

ReactDOM.render(
    <HelloWorld name="a compiled React Component" />, document.getElementById('react-example')
);