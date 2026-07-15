import React, { useState, useRef, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));


function Portfolio() {
  const containerRef = useRef(null);
  const [navHidden, setNavHidden] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const current = el.scrollTop;
      const delta = current - lastScrollY.current;

      // Hide when scrolling down past first screen, show when scrolling up
      if (current < 80) {
        setNavHidden(false);
      } else if (delta > 0) {
        setNavHidden(true);
      } else if (delta < 0) {
        setNavHidden(false);
      }

      lastScrollY.current = current;
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Watch the dark background section — flip navbar to white when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let observer;
    const init = () => {
      const darkSection = document.getElementById('dark-band');
      if (!darkSection) return;
      observer = new IntersectionObserver(
        ([entry]) => setIsDark(entry.isIntersecting),
        { root: el, threshold: 0.4 }
      );
      observer.observe(darkSection);
    };

    // Small delay to allow lazy-loaded Home component to mount
    const timer = setTimeout(init, 300);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar onNavClick={scrollToSection} hidden={navHidden} isDark={isDark} />
      <main className="relative">
        <div
          ref={containerRef}
          className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
        >
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Yükleniyor...</div>}>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="blog" className="snap-start"><Blog /></div>
            <div id="contact" className="snap-start"><Contact /></div>

          </Suspense>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
