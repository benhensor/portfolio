import React, { useState, useEffect } from 'react';
import tech from '../../tech';
import './skills.css';


export default function Skills() {

  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 50) {
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
    <section id="skills" className={scrolled ? 'scrolled' : ''}>
    <div className='skills-container'>
    <div className='skills-header'>
      <h1>Skills</h1>
      <h3>Here are just some of the technologies I have worked with...</h3>
    </div>
      <div className='skills-row'>
        <div>
          <div className='skills-content'>
       
            <div className='skills-slider' >
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
    </section>
  )
}