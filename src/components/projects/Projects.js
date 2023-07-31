import React from 'react';
import PaprbackLogo from '../../assets/img/paprback_orangebooks_whitetext.svg';
import BookShelf from '../../assets/img/bookshelfHero.png';
import MixingDesk from '../../assets/img/mixingDesk.jpeg';
import BenHensorSoundLogo from '../../assets/img/bhsoundLogo.svg';
import navIcon1 from '../../assets/icons/nav-icon1.svg';
import navIcon4 from '../../assets/icons/nav-icon4.svg';
import './projects.css';



export default function Projects () {

  return (
    <section id='projects'>
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
              <div className="project-logo-container">
                <img className="project1-logo" src={PaprbackLogo} alt="" />
              </div>
              <div className="project-content">
                <h3>Paprback</h3>
                <p className="project-description">
                  Paperback is a software solution designed to connect book lovers for the purpose of exchanging and donating unwanted books.
                </p>
                <div className="project-stack">
                  <span>Tech Stack: </span>
                  <p>React JS</p>
                  <p>Node JS</p>
                  <p>Express</p>
                  <p>PosgreSQL</p>
                  <p>Netlify</p>
                  <p>Render</p>
                </div>
                <div className="project-icons">
                <a href="https://github.com/benhensor/soc_byteclub_paprback" rel="noreferrer" target="_blank" className="project-link"><img src={navIcon1} alt="Github" /></a>
                <a href="https://bcpaprback.netlify.app/" rel="noreferrer" target="blank" className="project-link"><img src={navIcon4} alt="Netlify" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="project2">
            <div className="project-card">
              <img className="project-image" src={MixingDesk} alt="Open book in front of a bookshelf" />
              <div className="project-logo-container">
                <img className="project2-logo" src={BenHensorSoundLogo} alt="" />
              </div>
              <div className="project-content">
                <h3>Ben Hensor Sound</h3>
                <p className="project-description">
                  A re-creation of my personal website, this time with a focus on my audio production work.
                </p>
                <div className="project-stack">
                  <span>Tech Stack: </span>
                  <p>React JS</p>
                  <p>Node JS</p>
                  <p>Express</p>
                  <p>Vimeo</p>
                  <p>Netlify</p>
                </div>
                <div className="project-icons">
                <a href="https://github.com/benhensor/benhensorsound" rel="noreferrer" target="_blank" className="project-link"><img src={navIcon1} alt="Github" /></a>
                <a href="https://benhensorsound.netlify.app/" rel="noreferrer" target="blank" className="project-link"><img src={navIcon4} alt="Netlify" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        

      </div>
      <div className="projects-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
          className="stroke-fill"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
        </div>
    </section>

  )
}