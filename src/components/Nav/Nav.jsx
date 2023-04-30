import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine, RiToolsFill } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home')
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services" onClick={() => setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><RiToolsFill /></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};
  
export default Nav;
