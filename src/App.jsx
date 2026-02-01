import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Certificates from './components/Certificates/Certificates'
import Projects from './components/Projects/Projects'

import Footer from './components/Footer/Footer'
import './App.css'
import Skills from './components/Skills/Skills'

/**
 * Main App Component
 * Renders all sections of the portfolio website
 * Theme toggle is now integrated in the Navbar component
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills/>
        <Certificates />
        <Projects />
        
      </main>
      <Footer />
    </div>
  )
}

export default App

