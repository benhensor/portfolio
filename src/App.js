import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Journey from './components/journey/Journey';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header/>
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
