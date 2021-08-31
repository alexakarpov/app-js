console.log('Abbe');

// JSX - Javascript XML new syntax

//var bad_template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
