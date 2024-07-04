import React, { useState } from 'react'
import logo from '../assets/img/logo2023.webp'
import '../styles/footer.css'



function Footer() {

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
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
        <a href='#home' className='footer-logo-container' onClick={scrollToTop}>
        <img className='logo' src={logo} alt='logo' onClick={scrollToTop}/>
        </a>
        <p className='copyright'>&#169; {year} Ben Hensor</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;