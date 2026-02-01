import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import './Certificates.css'

import API from '../../assets/certificates/API.PNG'
import cloud from '../../assets/certificates/cloud.PNG'
import Git from '../../assets/certificates/Git.PNG'
import Mongo from '../../assets/certificates/Mongo.PNG'
import Reacts from '../../assets/certificates/React.PNG'
import Sales from '../../assets/certificates/Sales.PNG'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [modalImage, setModalImage] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Introduction to API Testing with Postman',
      institution: "Pearl's University",
      image: API,
    },
    {
      id: 2,
      title: 'Cloud Computing Basics',
      institution: "Pearl's University",
      image: cloud,
    },
    {
      id: 3,
      title: 'GIT Fundamentals',
      institution: "Pearl's University",
      image: Git,
    },
    {
      id: 4,
      title: 'MongoDB Basics',
      institution: "Pearl's University",
      image: Mongo,
    },
    {
      id: 5,
      title: 'React Fundamentals',
      institution: "Pearl's University",
      image: Reacts,
    },
    {
      id: 6,
      title: 'Sales Fundamentals',
      institution: "Pearl's University",
      image: Sales,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <>
      <section id="certificates" className="certificates-section" ref={ref}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div className="section-header" variants={cardVariants}>
              <h2 className="section-title">Certificates & Achievements</h2>
              <p className="section-subtitle">
                Professional certifications and achievements
              </p>
            </motion.div>

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  className="certificate-card"
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  onClick={() => setModalImage(certificate.image)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>

                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-institution">{certificate.institution}</p>

                  <div className="certificate-image">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="certificate-overlay">
                    <span>View Certificate</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" />
            <button className="modal-close" onClick={() => setModalImage(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates








