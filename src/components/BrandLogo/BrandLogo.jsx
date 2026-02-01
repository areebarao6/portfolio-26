import React from 'react'
import { motion } from 'framer-motion'
import './BrandLogo.css'

/**
 * Brand Logo Component
 * Unique animated typographic logo for Areeba Javed
 * Features animated initials with gradient stroke and glow effect
 */
const BrandLogo = () => {
  const letterVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 200,
      },
    }),
  }

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="brand-logo"
      initial="hidden"
      animate="visible"
    >
      {/* Animated SVG Background Shape */}
      <motion.svg
        className="brand-svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-color)" />
            <stop offset="50%" stopColor="var(--accent-light)" />
            <stop offset="100%" stopColor="var(--accent-color)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated Circle Path */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#brandGradient)"
          strokeWidth="2"
          variants={pathVariants}
          style={{ filter: 'url(#glow)' }}
        />
        
        {/* Decorative Lines */}
        <motion.line
          x1="50"
          y1="100"
          x2="150"
          y2="100"
          stroke="url(#brandGradient)"
          strokeWidth="1"
          variants={pathVariants}
          style={{ filter: 'url(#glow)' }}
        />
        <motion.line
          x1="100"
          y1="50"
          x2="100"
          y2="150"
          stroke="url(#brandGradient)"
          strokeWidth="1"
          variants={pathVariants}
          style={{ filter: 'url(#glow)' }}
        />
      </motion.svg>

      {/* Typographic Initials */}
      <div className="brand-initials">
        <motion.div
          className="initial-letter initial-a"
          custom={0}
          variants={letterVariants}
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          A
        </motion.div>
        <motion.div
          className="initial-letter initial-j"
          custom={1}
          variants={letterVariants}
          whileHover={{ scale: 1.2, rotate: -5 }}
        >
          J
        </motion.div>
      </div>

      {/* Animated Underline */}
      <motion.div
        className="brand-underline"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default BrandLogo






