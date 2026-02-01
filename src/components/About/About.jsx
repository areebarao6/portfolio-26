import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaBriefcase, FaUniversity } from 'react-icons/fa'
import './About.css'

/**
 * About Section Component
 * Displays Education and Experience in a clean timeline/card layout
 */
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = {
    degree: 'Software Engineering – Last Year',
    university: 'University of Karachi (UBIT)',
    semester: '7th Semester',
    cgpa: 'CGPA: 3.5',
  }

  const experience = [
    {
      title: 'Remote Project-Based Frontend Developer',
      company: 'CRM Project',
      period: 'Present',
      description: 'Working on CRM Project using React JS. Building responsive and interactive user interfaces with modern React practices.',
      technologies: ['React JS', 'JavaScript', 'Frontend Development'],
    },
    {
      title: 'Junior Web Developer',
      company: 'Dow Ojha Institute',
      period: 'Internship',
      description: 'Completed internship as Junior Web Developer working with PHP. Gained hands-on experience in web development and backend technologies.',
      technologies: ['PHP', 'Web Development', 'Backend'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate Software Engineer with a focus on modern web development
            </p>
          </motion.div>

          <div className="about-content">
            {/* Education Card */}
            <motion.div className="about-card education-card" variants={itemVariants}>
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3 className="card-title">Education</h3>
              <div className="education-details">
                <div className="education-item">
                  <FaUniversity className="education-icon" />
                  <div className="education-content">
                    <h4 className="education-degree">{education.degree}</h4>
                    <p className="education-university">{education.university}</p>
                    <div className="education-meta">
                      <span className="education-semester">{education.semester}</span>
                      <span className="education-cgpa">{education.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div className="about-card experience-section" variants={itemVariants}>
              <div className="card-icon">
                <FaBriefcase />
              </div>
              <h3 className="card-title">Experience</h3>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="experience-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="experience-dot"></div>
                    <div className="experience-content">
                      <h4 className="experience-title">{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-period">{exp.period}</p>
                      <p className="experience-description">{exp.description}</p>
                      <div className="experience-technologies">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
