import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Journey from './components/journey/Journey';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {

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




  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);





  return (
    <main className="App">
      <Header scolled={scrolled}/>
      <div className="content">
      <Hero />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
