//For React, you must import React from 'react'. This is because anytime you write JSX code like <MyComponent /> or <App />, this JSX code is converted to normal Javascript and uses React.
//React JSX makes it easier to read/express (syntatic sugar) and create DOM elements using Javascript.
//After Babel transformed your code which is written with JSX elements, into the React and then createElement method calls, if you forget to import React, it will be undefined and the createElement call will fail.
//Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript.
import React from "react";
//ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
//React and ReactDOM were split into two libraries because of React Native. React contains functionality used in web and mobile apps whereas ReactDOM functionality is used only in web apps.
//The react package holds the react source for components, state, props and all the code that is react. The react-dom package is the glue between React and the DOM (Document Object Model).
import ReactDOM from "react-dom";

//I need to import the "App.js" file since it's where I have all the base stuff I need for the website, which includes my gradient background color, all the files/components I need to build the website.
import App from "./App";
//I need to import the "index.css" file which has all the gradient colors and font styles I need for the website.
import "./index.css";
//The code below is basically saying to render the whole React App into the element with ID "root".
//This render function takes two arguments, HTML code and an HTML element. The purpose of the function is to display the specified HTML code inside the specified HTML element.
ReactDOM.render(<App />, document.getElementById("root"));