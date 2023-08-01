import React, { useState, useEffect } from 'react';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon2 from '../../assets/icons/nav-icon2.svg';
import navIcon3 from '../../assets/icons/nav-icon3.svg';
import navIcon5 from '../../assets/icons/nav-icon5.svg';
import './journey.css';


export default function Journey () {

  const [tabletView, setTabletView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setTabletView(true);
      } else {
        setTabletView(false);
      }
    }
    window.addEventListener('resize', handleResize)
  }, [])



  return (
    <section id='journey'>
      <div className="journey-background-mask"></div>
      <div className='journey-container'>
        <div className='journey-header'>
          <h1>My Journey</h1>
        </div>
        
        <div className='journey-content'>

        {tabletView ? ( 
          <>  
            
            <div className='journey-column-one'>

                <div className="block">
                  <div className="block-text">
                    <h4>Hi, I'm Ben, a Junior Developer based in Bristol, UK.</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>I started out creating music and sound effects for local theatre companies...</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>Driven by my love for audio production, I trained at the prestigious National Film & Television School, honed my skills and became a professional Sound Designer, working in Film, Television, and Commercials for over a decade.</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>However, following the pandemic, I realised the need to adapt and explore new avenues. It was during this time that I made a bold decision to pursue my other passion: Software Development!</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>To kickstart this new chapter, I enrolled onto the School of Code. The experience was incredibly challenging, but through determination and a lot of hard work, I completed the immensely challenging coding bootcamp...</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>Throughout this journey, I have embraced the opportunity to acquire a wealth of new knowledge and skills. Now, I'm eagerly poised to take the next step in my career and become a software developer, ready to contribute my expertise to exciting projects and make a meaningful impact in the world of technology.</h4>
                  </div>
                </div>
                <div className="block">
                  <div className="block-text">
                    <h4>Thank you for visiting my portfolio, please check out some of my projects below. I will be adding more as they become completed. If you would like to connect with me, check out my GitHub page or get in touch then please follow the links below!</h4>
                  </div>
                </div>

            </div>

            <div className='journey-column-two'>

                <div className="journey-links">
                  <div className="journey-icons">
                    <div className="journey-link">
                    <a href="https://github.com/benhensor" rel="noreferrer" target="_blank">
                      <img src={navIcon1} alt="Github" />
                    </a>
                    <h3 className="journey-link-description">Github</h3>
                    </div>
                    <div className="journey-link">
                    <a href="https://www.linkedin.com/in/benhensor/" rel="noreferrer" target="_blank">
                      <img src={navIcon2} alt="LinkedIn" />
                    </a>
                    <h3 className="journey-link-description">LinkedIn</h3>
                    </div>
                    <div className="journey-link">
                    <a href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm" rel="noreferrer" target="_blank">
                      <img src={navIcon3} alt="IMDB" />
                    </a>
                    <h3 className="journey-link-description">IMDB</h3>
                    </div>
                    <div className="journey-link">
                    <a href="#connect" onClick={() => console.log('connect')}>
                      <img src={navIcon5} alt="" />
                    </a>
                    <h3 className="journey-link-description">Connect with me!</h3>
                    </div>
                  </div>
                  
                </div>
              
            </div>
        
          </>

        ) : (

          <>

            <div className='journey-column-one'>

              <div className="block">
                <div className="block-text">
                  <h4>Hi, I'm Ben, a Junior Developer based in Bristol, UK.</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-text">
                  <h4>Driven by my love for audio production, I trained at the prestigious National Film & Television School, honed my skills and became a professional Sound Designer, working in Film, Television, and Commercials.</h4>
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
              </div>

            </div>

          </>

        )}



        </div>

        <div className="journey-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
          className="stroke-fill"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
        </div>


      </div>
    </section>
  )
}