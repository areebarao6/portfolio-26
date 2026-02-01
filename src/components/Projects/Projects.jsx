import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

/**
 * Projects Section Component
 * Displays project cards with hover effects and animations
 */
const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1,
      title: 'Karachi University Student Portal',
      description:
        'A web-based student portal designed for Karachi University. It allows students to manage their academic information, view updates, and access university-related resources through a clean and user-friendly interface.',
      link: 'https://university-portal-frontend-neon.vercel.app',
    },
    {
      id: 2,
      title: 'GPA Calculator & Study Timer',
      description:
        'A productivity-focused web application that helps students calculate their GPA accurately and manage their study time using a built-in study timer. Designed to improve academic planning and focus.',
      link: 'https://gpa-dashboard-8j2p.vercel.app',
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={cardVariants}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A collection of projects showcasing my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Project Link */}
                  <motion.a
                    href={project.link}
                    className="project-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                {/* Decorative Element */}
                <div className="project-decoration"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
