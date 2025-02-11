import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    if (!isModalOpen) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="App">
      <Navbar onNavClick={scrollToSection} />
      <main className="relative">
        <div className={`snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth ${isModalOpen ? 'overflow-hidden' : ''}`}>
          <div id="home" className="snap-start h-screen">
            <Home />
          </div>
          <div id="about" className="snap-start h-screen">
            <About />
          </div>
          <div id="projects" className="snap-start h-screen">
            <Projects setIsModalOpen={setIsModalOpen} />
          </div>
          <div id="contact" className="snap-start h-screen">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
