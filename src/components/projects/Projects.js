import React, { useState, useEffect } from 'react';
import './projects.css';



export default function Projects () {

  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 1000) {
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
                Paprback
              </div>
            </div>
            <div className="project2">
              <div className="project-card">
                Ben Hensor Sound
              </div>
            </div>
            <div className="project3">
              <div className="project-card">
                FrontEnd Masters Proj?
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

  )
}