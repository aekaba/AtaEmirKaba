import React, { useState, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// Lazy loading ile bileşenleri import ediyoruz
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

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
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Yükleniyor...</div>}>
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
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
