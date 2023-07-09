import React, { useState, useEffect } from 'react';
import './journey.css';


export default function Journey () {

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
    <section id='journey' className={scrolled ? 'scrolled' : ''}>
      <div className='journey-container'>
        <div className='journey-header'>
          <h1>My Journey</h1>
          <h3>From Sound design to sound Design!</h3>
        </div>
        <div className='journey-row'>
          <div className='journey-content'>
            <div className="journey-block1">
              <h4>Hi, I'm Ben, a Front End Developer based in Bristol, UK.</h4>
            </div>
            <div className="journey-block2">
              <h4>After working in the film industry for almost a decade I have decided to take the plunge and get into the world of tech!</h4>
            </div>
            <div className="journey-block3">
              <h4>I am currently enrolled on the School of Code Bootcamp being put through my paces learning about all aspects of coding and software development and agile team frameworks.</h4>
            </div>
            <div className="journey-block4">
              <h4>At the moment I am focused on making the most of this incredible opportunity, I love collaborative working and problem-solving and I am looking forward to launching myself into a new career in Front End Development.</h4>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}