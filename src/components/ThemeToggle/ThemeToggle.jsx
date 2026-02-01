import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

/**
 * Theme Toggle Component
 * Responsive toggle button for switching between light and dark modes
 */
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      initial={false}
      animate={{
        rotate: isDarkMode ? 180 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        className="theme-icon-wrapper"
        animate={{
          rotate: isDarkMode ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle



