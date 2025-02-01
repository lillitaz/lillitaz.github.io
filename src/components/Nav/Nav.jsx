import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine, RiToolsFill } from 'react-icons/ri';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

  const scrollTo = (target) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(target);
    }
  };

  return (
    <nav>
      <a href="/#" onClick={() => scrollTo('home')} className={activeNav === 'home' ? 'active' : ''}><AiOutlineHome /></a>
      <Link to="#about" onClick={() => scrollTo('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></Link>
      <Link to="#experience" onClick={() => scrollTo('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBookAlt /></Link>
      <Link to="#contact" onClick={() => scrollTo('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail /></Link>
    </nav>
  );
};

export default Nav;
