import React, { useState, useEffect } from 'react';
import { MdMail } from 'react-icons/md';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon2 from '../../assets/icons/nav-icon2.svg';
import navIcon3 from '../../assets/icons/nav-icon3.svg';
import './journey.css';


export default function Journey () {

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    
    const onScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
    }
      window.addEventListener('scroll', onScroll);
  
      return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <section id='journey' className={scrolled ? 'scrolled' : ''}>
      <div className='journey-container'>
        <div className='journey-header'>
          <h1>My Journey</h1>
        </div>
        <div className='journey-content'>

          <div className='journey-column-one'>

              <div className="block">
                <div className="block-text">
                  <h4>Hi, I'm Ben, a Junior Developer based in Bristol, UK.</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-text">
                  <h4>Driven by my love for audio production, I trained at the prestigious National Film & Television School, honed my skills and became a professional Sound Designer, working in Film, Television, and Commercials for over a decade.</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-text">
                  <h4>To kickstart this new chapter, I enrolled onto the School of Code. The experience was incredibly challenging, but through determination and a lot of hard work, I completed the immensely challenging coding bootcamp...</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-text">
                  <h4>Thank you for visiting my portfolio, please check out some of my projects below. I will be adding more as they become completed. If you would like to connect with me, check out my GitHub page or get in touch then please follow the links below!</h4>
                </div>
              </div>

          </div>

          <div className='journey-column-two'>

              <div className="block">
                <div className="block-text">
                  <h4>I started out creating music and sound effects for local theatre companies...</h4>
                </div>
              </div>
              
              <div className="block">
                <div className="block-text">
                  <h4>However, with the onset of the pandemic, I realized the need to adapt and explore new avenues. It was during this time that I made a bold decision to pursue my other passion: Software Development!</h4>
                </div>
              </div>

              <div className="block">
                <div className="block-text">
                  <h4>Throughout this journey, I have embraced the opportunity to acquire a wealth of new knowledge and skills. Now, I'm eagerly poised to take the next step in my career and become a software developer, ready to contribute my expertise to exciting projects and make a meaningful impact in the world of technology.</h4>
                </div>
              </div>

              <div className="journey-links">
                <div className="journey-icons">
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
                <a href="#connect"><button className="journey-connect-button" onClick={() => console.log('connect')}><span>Let's Connect!</span></button></a>
                <a href="#connect"><MdMail className="journey-connect-icon" onClick={() => console.log('connect')}/></a>
              </div>
            
          </div>
          
            
            
          
        

        </div>
      </div>
    </section>
  )
}