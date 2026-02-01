import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

/**
 * Navbar Component
 * Fixed navigation bar with smooth scroll, theme toggle, and responsive menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Handle scroll to show/hide navbar
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.div
          className="navbar-logo"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">AJ</span>
        </motion.div>

        {/* Desktop Menu & Theme Toggle */}
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('certificates')}>Certificates</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
          
          {/* Theme Toggle - Desktop */}
          <div className="navbar-theme-toggle">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('certificates')}>Certificates</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
          {/* Theme Toggle - Mobile */}
          <li className="mobile-theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
