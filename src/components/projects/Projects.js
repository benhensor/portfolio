import React from 'react';
import PaprbackLogo from '../../assets/img/paprback_orangebooks_whitetext.svg';
import BookShelf from '../../assets/img/bookshelfHero.png';
import MixingDesk from '../../assets/img/mixingDesk.jpeg';
import BenHensorSoundLogo from '../../assets/img/bhsoundLogo.svg';
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

          <div className="project-card">
            <img className="project-image" src={BookShelf} alt=""/>
            <div className="project-content">
              <div className="project-title">
                <img className="project1-logo" src={PaprbackLogo} alt="" />
                {/* <h1>Paprback</h1> */}
              </div>
              <p><span>Paprback</span> is a software solution to connect people in their local area for the purpose of exchanging and donating unwanted books.</p>
              <div className="project-icons">
                <a href="https://paprback.netlify.app/" target="_blank" rel="noreferrer">
                  Live site
                </a>
                <a href="https://github.com/benhensor/soc_byteclub_paprback" target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img className="project-image" src={MixingDesk} alt=""/>
            <div className="project-content">
              <div className="project-title">
                <img className="project2-logo" src={BenHensorSoundLogo} alt="" />
                <h1>Ben Hensor Sound</h1>
              </div>
              <p>This is a recreation of my Sound Design website built in React with an Express mail server.</p>
              
              <div className="project-icons">
                <a href="https://benhensorsound.netlify.app/" target="_blank" rel="noreferrer">
                  Live site
                </a>
                <a href="https://github.com/benhensor/benhensorsound" target="_blank" rel="noreferrer">
                  Code
                </a>
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
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
        </div>
    </section>

  )
}