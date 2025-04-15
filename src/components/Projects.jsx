'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import proscript from '../assets/proscript.png'
import codered from '../assets/codered.jpg'
import codevault from '../assets/codevault.png'
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: 'ProScript',
      description:
        'A smart Prescription Manager using a rule-based approach to predict potential side effects and perform drug compatibility analysis.',
      image: proscript,
      tech: [
        'ReactJS',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'FastAPI',
        'TensorFlow',
        'GeminiAPI',
        'OpenAI',
      ],
      features: [
        'Developed a smart Prescription Manager using a rule-based approach to predict potential side effects',
        'Implemented a system to evaluate critical drug risks based on various factors',
        'Used fuzzy search to retrieve prior records with similar symptoms/diagnoses',
        'Leveraged Gemini API for prescription insights, OpenAI OCR to parse handwritten prescriptions',
      ],
      link: 'https://github.com/DecayDestructor/airavat-proscript',
    },
    {
      title: 'Code Red',
      description:
        'A Web-Hosted Game Interface for an event that conjured more than 100 teams of 2, with each participant having their own client.',
      image: codered,
      tech: [
        'PostgreSQL',
        'ExpressJS',
        'NodeJS',
        'ReactJS',
        'Redux Toolkit',
        'Redis',
      ],
      features: [
        'Created a Web-Hosted Game Interface for an event with more than 100 teams',
        'Implemented a graph-based storyline with each level having its own concept mini-game',
        'Optimized Real-Time Game State Management using Redis, reducing response time from 350ms to 50ms',
        'Integrated PostgreSQL as a Persistent Data Store, periodically syncing with Redis',
      ],
      link: 'https://github.com/DecayDestructor/code-red-25',
    },
    {
      title: 'Code Vault',
      description:
        'A GitHub inspired code snippet manager to create, share and export segments of frequently used codes.',
      image: codevault,
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'ReactJS', 'Redux Toolkit'],
      features: [
        'Developed a GitHub inspired code snippet manager',
        'Implemented Version Control to maintain history of any code snippet',
        'Provided options to Like, Save, or Fork a searched snippet',
        'Used MongoDB Compound Indexing, reducing search time by 96%',
      ],
      link: 'https://github.com/DecayDestructor/code-vault',
    },
  ]

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.1 }}
              className={`card cursor-pointer transition-all duration-300 ${
                activeProject === index
                  ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                  : 'hover:border-indigo-500/50'
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                {project.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                View Details
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card overflow-hidden"
        >
          {/* Image at the top half of the card */}
          <div className="w-full h-64 md:h-80 overflow-hidden relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-sm"></div>
            <img
              src={projects[activeProject].image || '/placeholder.svg'}
              alt={projects[activeProject].title}
              className="w-full h-full object-contain bg-gray-900"
            />
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-900/80 to-transparent">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/20"
              >
                Screenshot
              </motion.span>
            </div>
          </div>

          {/* Project details below the image */}
          <div className="px-4 pb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                {projects[activeProject].title}
              </h3>
              <motion.a
                href={projects[activeProject].link}
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            </div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {projects[activeProject].description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-400"
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
                  Key Features
                </h4>
                <ul className="space-y-3 mb-6">
                  {projects[activeProject].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
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
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-400"
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
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
