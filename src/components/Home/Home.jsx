import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import BrandLogo from '../BrandLogo/BrandLogo'
import './Home.css'
import profileimg from '../../assets/Profile.jpg'

/**
 * Home/Hero Section Component
 * Features unique animated branding element and premium animations
 */
const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="home-section">
      <div className="container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Unique Brand Logo */}
          <motion.div
            className="brand-logo-wrapper"
            variants={itemVariants}
          >
            <BrandLogo />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="profile-image-placeholder"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="image-frame">
              <img 
                src={profileimg} 
                alt="Areeba Javed" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder-bg" style={{ display: 'none' }}>
                <span className="placeholder-text">Your Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="home-text" variants={itemVariants}>
            <motion.h1
              className="home-name"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="greeting">Hi, I'm</span>
              <span className="name-highlight">Areeba Javed</span>
            </motion.h1>
            <motion.h2
              className="home-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Software Engineer / Frontend Developer
            </motion.h2>
            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Passionate about building innovative web solutions and creating
              exceptional user experiences. Currently pursuing Software Engineering
              and working on exciting projects with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="home-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="home-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/areebaajaved/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:areejaved337@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
