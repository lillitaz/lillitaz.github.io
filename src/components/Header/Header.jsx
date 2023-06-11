import React from "react";
import "./header.css";
import PHOTO from '../../assets/intro-graphic.jpg';
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollTo = (target) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <header >
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Lilli Weitzer</h1>
        <h5 className="text-light">Full-Stack Developer in the Making</h5>
        <HeaderSocials/>
        <div className="me">
          <img id="header-image" src={PHOTO} alt="me"/>
        </div>
        <Link to="#contact" className='scroll_down' onClick={() => scrollTo('contact')} >Scroll Down</Link>      
      </div>
    </header>
  );
};
export default Header;
