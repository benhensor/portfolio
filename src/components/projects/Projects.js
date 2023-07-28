import React, { useState, useEffect } from 'react';
import PaprbackLogo from '../../assets/img/paprback_orangebooks_whitetext.svg';
import BookShelf from '../../assets/img/bookshelfHero.png';
import BenHensorSoundLogo from '../../assets/img/logo2023.png';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon4 from '../../assets/icons/nav-icon4.svg';
import './projects.css';



export default function Projects () {

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    
    const onScroll = () => {
    if (window.scrollY > 2300) {
      setScrolled(true)
    } else {
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
          <h2>Feel free to check out some of my projects, more coming soon...</h2>
        </div>
        <div className="projects-row">

          <div className="project1">
            <div className="project-card">
              <img className="project-image" src={BookShelf} alt="Open book in front of a bookshelf" />
              <div className="project-content">
              <div className="project-logo-container">
                <img className="project1-logo" src={PaprbackLogo} alt="" />
              </div>
                <h2 className="project-title">Paprback</h2>
                <p>
                  Paperback is a software solution designed to connect book lovers for the purpose of exchanging and donating unwanted books.
                </p>
                <p>
                  This was my final project for the School of Code bootcamp. It was built in 5 weeks by a team of 6 junior developers. The app is built in React with a Node.js backend, Express server and a PostgreSQL database. The application is hosted on Netlify and Render.
                </p>
                <div className="project-icons">
                <a href="https://github.com/benhensor/soc_byteclub_paprback" rel="noreferrer" target="_blank" className="project-link"><img src={navIcon1} alt="Github" /></a>
                <a href="https://bcpaprback.netlify.app/" rel="noreferrer" target="blank" className="project-link"><img src={navIcon4} alt="Netlify" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="project2">
            <div className="project-card">
              <img className="project-image" src={BookShelf} alt="Open book in front of a bookshelf" />
              <div className="project-content">
              <div className="project-logo-container">
                <img className="project2-logo" src={BenHensorSoundLogo} alt="" />
              </div>
                <h2 className="project-title">Ben Hensor Sound</h2>
                <p>
                  I was a professional Sound Editor in the film industry for over a decade before learning to code.
                </p>
                <p>
                  Here is a recreation of my old website using React. It is a single page application with a responsive design.
                </p>
                <div className="project-icons">
                <a href="https://github.com/benhensor/benhensorsound" rel="noreferrer" target="_blank" className="project-link"><img src={navIcon1} alt="Github" /></a>
                <a href="https://benhensorsound.netlify.app/" rel="noreferrer" target="blank" className="project-link"><img src={navIcon4} alt="Netlify" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}