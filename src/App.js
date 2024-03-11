import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ParticleA from './components/Particle';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Component from './components/Footer';
// eslint-disable-next-line no-unused-vars
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  return (
    
    <div className="App">
      
      <ParticleA />
      <Header />
      <Main />
      <AboutMe />
      <Projects />
      <OtherProjects />
      <Component />


    
    </div>
  );
}

export default App;
