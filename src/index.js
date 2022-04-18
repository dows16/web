//These are for importing the react modules nessecary for this script below.
import React from "react"; 
import ReactDOM from "react-dom";

//I need to import the "App.js" file since it's where I have all the base stuff I need for the website, which includes my gradient background color, all the files/components I need to build the website.
import App from "./App";
//I need to import the "index.css" file which has all the gradient colors and font styles I need for the website.
import "./index.css";
//The code below is basically saying to render the whole React App into the element with ID "root".
//This render function takes two arguments, HTML code and an HTML element. The purpose of the function is to display the specified HTML code inside the specified HTML element.
ReactDOM.render(<App />, document.getElementById("root"));