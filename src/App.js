import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
// import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header/>
      <div className="content">
      <Hero />
      <Skills />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
