import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiMongodb } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillsList = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJsSquare />, level: 90 },
        { name: 'TypeScript', icon: <FaJsSquare />, level: 50 },
        { name: 'Python', icon: <FaPython />, level: 75 },
        { name: 'HTML', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
        { name: 'SQL', icon: <FaDatabase />, level: 80 },
        { name: 'JAVA', icon: <FaDatabase />, level: 75 }
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 60 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
        { name: 'Express.js', icon: <SiExpress />, level: 70 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'MySQL', icon: <FaDatabase />, level: 70 },
      ],
    },
    {
      category: 'Tools & Dev',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'REST APIs', icon: <FaNodeJs />, level: 80 },
        { name: 'Authentication', icon: <FaNodeJs />, level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-header">
            <h2 className="skills-title">Skills</h2>
            <p className="skills-subtitle">
              Core skills I use in real projects — tools, languages, frameworks, and databases.
            </p>
          </div>

          {skillsList.map((group, i) => (
            <motion.div
              key={i}
              className="skills-group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <h3 className="skills-category">{group.category}</h3>

              <div className="skills-items">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="skills-item">
                    <div className="skills-icon">{skill.icon}</div>
                    <div className="skills-info">
                      <span className="skills-name">{skill.name}</span>
                      <div className="skills-bar-bg">
                        <motion.div
                          className="skills-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.0, ease: 'easeInOut' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



