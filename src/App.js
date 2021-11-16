import React, { useState, useEffect } from 'react';

import 'animate.css';
//Paginas
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact';
import { Footer } from './components/Footer';

const App = () => {
  const [isDark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  return (
    <main className='bg-gray-100 text-gray-700 dark:text-gray-400 dark:bg-gray-900 body-font w-50'>
      <NavBar isDark={isDark} toggleDark={toggleDark} />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
