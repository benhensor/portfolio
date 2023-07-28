import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/img/logo2023.png';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon2 from '../../assets/icons/nav-icon2.svg';
import navIcon3 from '../../assets/icons/nav-icon3.svg';
import send from '../../assets/icons/send.svg';
import './header.css';


export default function Header () {

  // state to track which link is active (home, about, skills, projects)
  const [activeLink, setActiveLink] = useState('home');
  // state to track if mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 50) {
      // set state to true
      setScrolled(true)
    } else {
      // set state to false
      setScrolled(false)
    }
    }
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
  }, []);



  const handleClick = () => { setIsOpen(!isOpen) };


  const onUpdateActiveLink = (value) => {
    if (activeLink === value) {
      return;
    }
    setActiveLink(value);
  
    // Scroll to section based on active link
    const section = document.getElementById(value);
    const header = document.querySelector('header');
    if (section && header) {
      const headerHeight = header.offsetHeight;
      const targetPosition = section.offsetTop - (headerHeight);
  
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    onUpdateActiveLink('home');
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>

        <div className="header-logo-container">
          <img className="header-logo" src={logo} alt="logo" onClick={scrollToTop}/>
          <div className="nav-mobile-name">
            <h1>Ben Hensor Dev</h1>
          </div>
        </div>
        
        <div id="mobile-controls" onClick={handleClick}>
          {isOpen ? <FaTimes className="visible" /> : <FaBars />}
        </div>

        <div className={`nav-menu-container ${isOpen ? 'visible' : ''} ${scrolled ? 'scrolled' : ''}`}>
          
          <div className="nav-menu">
            <ul className="header-menu">
              <li>
              <a href="#skills" className={ activeLink === 'skills' ? 'active menu-link' : 'menu-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</a>
              </li>
              <li>
              <a href="#journey" className={ activeLink === 'journey' ? 'active menu-link' : 'menu-link' } onClick={() => onUpdateActiveLink('journey')}>My Journey</a>
              </li>
              <li>
                <a href="#projects" className={ activeLink === 'projects' ? 'active menu-link' : 'menu-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</a>
              </li>
            </ul>
          </div>

          <div className="header-icons">
            <div className="icons">
              <a href="https://github.com/benhensor" rel="noreferrer" target="_blank">
                <img src={navIcon1} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/benhensor/" rel="noreferrer" target="_blank">
                <img src={navIcon2} alt="LinkedIn" />
              </a>
              <a href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm" rel="noreferrer" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <a href="#connect"><button className="connect-button" onClick={() => console.log('connect')}><span>Let's Connect!</span></button></a>
            <a href="#connect"><img src={send} alt="" className="connect-icon" onClick={() => handleClick('connect')}/></a>
          </div>

        </div>

      </nav>
    </header>
  );
}