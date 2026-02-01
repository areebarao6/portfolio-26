import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Theme Context
 * Manages dark/light mode state and provides theme values
 */
const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved theme preference, default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}






