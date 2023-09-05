import React from 'react';
import { projects } from '../../data';
import './projects.css';



export default function Projects () {

  return (
    <section id='projects'>
      <div className='projects-container'>
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div className="projects-subheader">
          <h2>Feel free to check out some of my projects below</h2>
        </div>



        <div className="projects-row">
        {projects.map((project) => (
          <div className="project-card" key={project.key}>
            <img className="project-image" src={project.image} alt=""/>
            <div className="project-content">
              <div className="project-title">
                <img className="project-logo" src={project.logo} alt="" />
                <h1>{project.title}</h1>
              </div>
              <div className="project-info">
                <p>{project.description}</p>
                <div className="project-icons">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}          

        </div>

      <div className="temp-notice">
        <h1>More coming soon!</h1>
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