import React from "react";
//I imported all the components and containers I need into the main file below.
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
//I imported the CSS file that I need for the main gradient background color, as well as the proper media queries so it'll be accessible on mobile and tablet as well.
import "./App.css";
//This is for rendering the different sections of my site.
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App