import React, { useState, useEffect } from 'react';
import PaprbackLogo from '../../assets/img/paprback_orangebooks_whitetext.svg';
import BenHensorSoundLogo from '../../assets/img/logo2023.png';
import './projects.css';



export default function Projects () {

  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 1500) {
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


  return (
    <section id='projects' className={scrolled ? 'scrolled' : ''}>
      <div className='projects-container'>
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div className="projects-subheader">
          <h2>Here are some of my projects</h2>
        </div>
        <div className="projects-row">
          <div className="projects-content">
            <div className="project1">
              <div className="project-card">
                <h1 className="project-title">Paprback</h1>
                <div className="project-image-container">
                  <img className="project-image" src={PaprbackLogo} alt="" />
                </div>
                <h3 className="project-description">
                  Paperback is a software solution designed to connect book lovers for the purpose of exchanging and donating old books.
                </h3>
                <a href="https://github.com/benhensor/soc_byteclub_paprback" target="blank" className="project-link">GitHub</a>
                <a href="https://bcpaprback.netlify.app/" target="blank" className="project-link">Online</a>
              </div>
            </div>
            <div className="project2">
              <div className="project-card">
              <h1 className="project-title">Coming soon...</h1>
                <div className="project-image-container">
                  <img className="project-image" src={BenHensorSoundLogo} alt="" />
                </div>
                <h3 className="project-description">
                  This is a recreation of my old website showcasing my film sound work.
                </h3>
                <a href="https://github.com/benhensor/soc_byteclub_paprback" target="blank" className="project-link">GitHub</a>
                <a href="https://bcpaprback.netlify.app/" target="blank" className="project-link">Online</a>
              </div>
            </div>
            <div className="project3">
              <div className="project-card">
              <h1 className="project-title">Coming soon...</h1>
                <div className="project-image-container">
                  {/* <img className="project-image" src={PaprbackLogo} alt="" /> */}
                </div>
                {/* <h3 className="project-description">
                  Paperback is a software solution designed to connect book lovers for the purpose of exchanging and donating old books.
                </h3>
                <a href="https://github.com/benhensor/soc_byteclub_paprback" target="blank" className="project-link">GitHub</a>
                <a href="https://bcpaprback.netlify.app/" target="blank" className="project-link">Online</a> */}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

  )
}