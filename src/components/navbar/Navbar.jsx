//useState is a Hook that allows you to have state (numbers that change/things that change) in functional parts/pieces.
import React, { useState } from 'react';
//Below I imported react-icons from "react-icons/ri" which is a small library that helps you add icons to your React apps coming from different icon libraries.
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  //Using useState since the toggleMenu function will change, I set it so it so the toggleMenu and setToggleMenu functions are set to false at the very start.
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    //There is something specific when I named my classnames, I'm using something called "BEM = Block Element Modifier."
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT-3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          //Here I made is so when you click on the "menu-icon" the toggleMenu function is set to true therefore enabling it so you can view the menu, but when the "close-icon" shows and you click it the toggleMenu function is set to false therefore closing the menu so you can't view it anymore.
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        //Below is just a list of all the content included in the menu.
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT-3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;