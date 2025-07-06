'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { workExperiencesData as workExperiences } from '../data/work-experiences.jsx'
const WorkExperience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
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
    <section id="work-experience" className="py-20 bg-gray-900/50">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {workExperiences.length > 1 && (
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-12"
            >
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 border-4 border-gray-900 text-white shrink-0">
                    {experience.icon}
                  </div>

                  <div className="flex-1">
                    <motion.div
                      className="card"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">
                            {experience.title}
                          </h3>
                          <h4 className="text-indigo-400 text-lg mb-2">
                            {experience.organization}
                          </h4>
                          <p className="text-gray-400 mb-2">
                            {experience.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 md:text-right">
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
                          {experience.period}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-lg">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-lg font-semibold mb-4 flex items-center">
                          <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 text-indigo-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          Key Achievements
                        </h5>
                        <ul className="space-y-4">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                inView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ delay: 0.3 + 0.1 * i }}
                              className="flex items-start gap-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-indigo-400 mt-0.5 shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-gray-300 leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {experience.technologies?.length > 0 && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-indigo-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </span>
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                  inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ delay: 0.4 + 0.05 * i }}
                                className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}

                      {experience.metrics?.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            inView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ delay: 0.6 }}
                          className="flex items-center justify-center gap-4 mt-6"
                        >
                          {experience.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 w-full"
                            >
                              <div className="text-2xl font-bold text-indigo-400 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            {workExperiences.length === 1
              ? 'This experience provided valuable hands-on experience in full-stack development, system architecture, and working with real users in a startup environment.'
              : 'These experiences have shaped my professional journey and provided valuable insights into software development and technology innovation.'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
