import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'
import './Contact.css'

/**
 * Contact Section Component
 * Contact form and social links
 */
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 1000)
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:areejaved337@gmail.com', label: 'Email' },
  ]

  const contactInfo = [
    { icon: FaEnvelope, text: 'areejaved337@gmail.com', link: 'mailto:areejaved337@gmail.com' },
    { icon: FaPhone, text: '0334-2064438', link: 'tel:+923342064438' },
    { icon: FaLinkedin, text: 'LinkedIn Profile', link: 'https://linkedin.com' },
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
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new projects and opportunities
            </p>
          </motion.div>

          <div className="contact-content">
            {/* Contact Info */}
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Get In Touch</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities
                to collaborate. Feel free to reach out!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-detail-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      aria-label={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="contact-form"
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

