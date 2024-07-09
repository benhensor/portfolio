import React, { useState } from 'react'
import {
  StyledFooter,
  FooterContainer,
  FooterContent,
} from '../styles/FooterStyles'
import logo from '../assets/img/logo2023.webp'

export default function Footer() {

  const year = new Date().getFullYear()

  // state to track which link is active (home, about, skills, projects)
  const [activeLink, setActiveLink] = useState('home')


  const onUpdateActiveLink = (value) => {
    if (activeLink === value) {
      return
    }
    setActiveLink(value)
  
    // Scroll to section based on active link
    const section = document.getElementById(value)
    const header = document.querySelector('header')
    if (section && header) {
      const headerHeight = header.offsetHeight
      const targetPosition = section.offsetTop - (headerHeight)
  
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }, 100)
    }

  }

  const scrollToTop = () => {
    onUpdateActiveLink('home')
  }

  return (
    <StyledFooter>
      <FooterContainer className='footer-container'>
        <FooterContent className='footer-content'>
        <a href='#home' className='footer-logo-container' onClick={scrollToTop}>
        <img className='logo' src={logo} alt='logo' onClick={scrollToTop}/>
        </a>
        <p className='copyright'>&#169; {year} Ben Hensor</p>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  );
}