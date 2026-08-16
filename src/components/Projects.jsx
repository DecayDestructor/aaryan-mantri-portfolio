'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import proscript from '../assets/proscript.png'
import codered from '../assets/codered.jpg'
import codevault from '../assets/codevault.png'
import khalo from '../assets/khalo.png'
import attendomatic from '../assets/attendomatic.png'
import autocomplete1 from '../assets/autocomplete1.jpg'
import autocomplete2 from '../assets/autocomplete2.jpg'
import autocomplete3 from '../assets/autocomplete3.jpg'
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeProject, setActiveProject] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const _motionReference = motion

  const projects = [
    {
      title: 'Distributed Autocomplete',
      description:
        'A distributed autocomplete engine with sharded radix-trie storage, Kafka feedback streaming, and fault-tolerant routing under load.',
      image: autocomplete1,
      gallery: [autocomplete1, autocomplete2, autocomplete3],
      tech: [
        'FastAPI',
        'Redis',
        'Kafka',
        'Docker',
        'Nginx',
        'Prometheus',
        'Grafana',
      ],
      features: [
        'Built a distributed autocomplete service with a compressed radix trie maintaining top-k ranked suggestions per node, sharded across 4 Docker containers using hybrid range partitioning and consistent hashing',
        'Engineered a Kafka streaming pipeline that decouples read and write paths so completed searches are aggregated over 30-second windows and asynchronously fed back into trie shards',
        'Implemented automatic fault tolerance via heartbeat health checks; dead shards are removed from the hash ring within 5 seconds and traffic redistributes without manual intervention',
        'Achieved 99% cache hit rate and zero failures across 15,000+ requests under load testing at 80 req/sec with 100 concurrent users, observable via a live Prometheus and Grafana dashboard',
      ],
      link: 'https://github.com/DecayDestructor/distributed-autocomplete',
    },
    {
      title: 'Attendomatic',
      description:
        'A platform-independent attendance tracking service with adapter-based integrations and an LLM intent parser for natural-language operations.',
      image: attendomatic,
      tech: ['FastAPI', 'PostgreSQL', 'SQLModel', 'Groq LLM'],
      features: [
        'Built a platform-independent attendance tracking service with a decoupled adapter architecture, enabling extension to Telegram, WhatsApp, and Discord without changing core business logic',
        'Engineered an LLM-powered natural-language parser that converts free-text messages into validated JSON actions using structured output schemas',
        'Implemented a confirmation-based execution flow to prevent unintended attendance operations',
        'Designed for seamless expansion into additional communication platforms and institutional workflows',
      ],
      link: 'https://github.com/DecayDestructor/attendomatic',
    },
    {
      title: 'Khalo',
      description:
        'A street food discovery platform with community features, personalized recommendations, and swipe-based matching system.',
      image: khalo,
      tech: ['Supabase', 'Gemini API', 'ExpressJS', 'NodeJS', 'React Native'],
      features: [
        'Implemented community feature enabling users to post, like, and filter food-related content based on location',
        'Engineered personalized stall recommendations combining user preferences and geospatial data with PostGIS',
        'Developed swipe-based matching system connecting users with food stalls tailored to current cravings',
        'Integrated Gemini API to automatically analyze user feedback and generate dynamic stall ratings',
      ],
      link: 'https://github.com/traveller318/SEHACK_LinearDepression_Khalo',
    },
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

  const activeProjectData = projects[activeProject]
  const galleryImages = activeProjectData.gallery || [activeProjectData.image]

  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeProject])

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    )
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    )
  }

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
                onClick={() => {
                  document
                    .getElementById('active-project-details')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
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
          id="active-project-details"
        >
          {/* Image at the top half of the card */}
          <div className="w-full h-64 md:h-80 overflow-hidden relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-sm"></div>
            <img
              src={galleryImages[activeImageIndex] || '/placeholder.svg'}
              alt={activeProjectData.title}
              className="w-full h-full object-contain bg-gray-900"
            />
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-900/80 border border-gray-700/60 text-white hover:bg-gray-800 transition-colors"
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-900/80 border border-gray-700/60 text-white hover:bg-gray-800 transition-colors"
                  aria-label="Next image"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/70 border border-gray-700/60">
                  {galleryImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        index === activeImageIndex
                          ? 'bg-indigo-400'
                          : 'bg-gray-500 hover:bg-gray-300'
                      }`}
                      aria-label={`Open image ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </>
            )}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-900/80 to-transparent">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/20"
              >
                {galleryImages.length > 1
                  ? `Screenshot ${activeImageIndex + 1}/${galleryImages.length}`
                  : 'Screenshot'}
              </motion.span>
            </div>
          </div>

          {/* Project details below the image */}
          <div className="px-4 pb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                {activeProjectData.title}
              </h3>
              <motion.a
                href={activeProjectData.link}
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
              {activeProjectData.description}
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
                  {activeProjectData.features.map((feature, index) => (
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
                  {activeProjectData.tech.map((tech, index) => (
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
