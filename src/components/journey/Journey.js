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
          </div>
        <div className='journey-subheader'>
          <h3>From Sound design to sound Design!</h3>
        </div>
        <div className='journey-row'>
          <div className='journey-content'>
            <div className="block1-position">
              <div className="journey-block1">
                <h4>Hi, I'm Ben, a Front End Developer based in Bristol, UK.</h4>
              </div>
            </div>
            <div className="block2-position">
              <div className="journey-block2">
                <h4>I started out creating music and sound effects for local theatre companies...</h4>
              </div>
            </div>
            <div className="block3-position">
              <div className="journey-block3">
                <h4>Some years later I decided to formalise my training and become a professional Sound Editor, I trained at the National Film and Television School and became a freelance Sound Designer.</h4>
              </div>
            </div>
            <div className="block4-position">
              <div className="journey-block4">
                <h4>Sadly, the pandemic wasn't kind to me and following some serious self-reflection I decided to pursue another career and follow my other design passion, Frontend Devlepment!</h4>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}