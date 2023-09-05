import React from 'react';
import { tech } from '../../data';
import './skills.css';


export default function Skills() {

  return (
    <section id="skills">

      <div className='skills-container'>

        <div className='skills-header'>
          <h1>Skills</h1>
          <h3>Here are just some of the technologies I have worked with...</h3>
        </div>
        <div className='skills-row'>
          <div>
          <div className="skills-slider-top-glow"></div>
            <div className='skills-content'>
            
              <div className='skills-slider'>
              
                {tech.map((skill, index) => (
                  <div className='skill-card' key={index}>
                    <img src={skill.icon} alt={skill.name} />
                    <div className="skill-name">
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                ))}      
              </div>
          
            </div>
          </div>
      
        </div>
        
        

      </div>
      <div className="skills-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
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