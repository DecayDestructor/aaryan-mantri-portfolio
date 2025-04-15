'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Statistics Head',
      organization: 'Core Team - Training and Placement Office',
      location: 'Sardar Patel Institute of Technology',
      period: 'January 2025 - Present',
      description:
        'Analyzing placement data and generating insights for the institute.',
    },
    {
      title: 'Technical Head',
      organization: "Students' Developer Club",
      location: 'Sardar Patel Institute of Technology',
      period: 'August 2024 - Present',
      description:
        'Leading technical initiatives and workshops for student developers.',
    },
    {
      title: 'Moderator',
      organization: 'Community of Coders',
      location: 'Sardar Patel Institute of Technology',
      period: 'October 2023 - April 2024',
      description:
        'Facilitated coding events and mentored junior students in programming concepts.',
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership & <span className="gradient-text">Extracurricular</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 transform md:translate-x-px"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-900 transform -translate-x-2 md:-translate-x-2.5"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                >
                  <div className="card">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-indigo-400 mb-2">{exp.organization}</h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
