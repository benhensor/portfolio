import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Journey from './components/journey/Journey';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);





  return (
    <main className="App">
      <Header />
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
