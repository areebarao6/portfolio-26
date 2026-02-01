import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'

/**
 * Footer Component
 * Simple footer with copyright and social links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="footer-text">
            Made with <FaHeart className="heart-icon" /> by Areeba Javed
          </p>
          <p className="footer-copyright">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

