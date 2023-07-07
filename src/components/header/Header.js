import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/img/logo2023.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './header.css';


export default function Header () {

  // state to track which link is active (home, about, skills, projects)
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => { setIsOpen(!isOpen) };


  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  
    // scroll to section based on active link
    const section = document.querySelector(`#${value}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  
  }

  return (
    <header>
      <nav>

        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div id="mobile-controls" onClick={handleClick}>
          {isOpen ? <FaTimes className="visible" /> : <FaBars />}
        </div>

        <div className={`nav-menu-container ${isOpen ? 'visible' : ''}`}>
          
          <div className="nav-menu">
            <ul className="header-menu">
              <li>
                <a href="#journey" className={ activeLink === 'journey' ? 'active menu-link' : 'menu-link' } onClick={() => onUpdateActiveLink('journey')}>My Journey</a>
              </li>
              <li>
                <a href="#skills" className={ activeLink === 'skills' ? 'active menu-link' : 'menu-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</a>
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
            <button className="connect-button" onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
          </div>

        </div>

      </nav>
    </header>
  );
}