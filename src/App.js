import React, { useState } from 'react'

import "animate.css"


//Paginas
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

const App = () => {

  const [isDark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!isDark)
    console.log(isDark)
  }

  return (
    <main className='text-gray-400 bg-gray-900 body-font w-50'>
      <NavBar isDark={isDark} toggleDark={toggleDark} />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
