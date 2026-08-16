'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaCode,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiApachekafka,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiC,
} from 'react-icons/si'
import { BiLogoVisualStudio as SiVisualstudiocode } from 'react-icons/bi'
import { TbBrandCpp } from 'react-icons/tb'

const Skills = () => {
  const _motionReference = motion
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillIconMap = {
    Python: <FaPython className="text-xl" />,
    'C/C++': (
      <span className="flex items-center">
        <SiC className="text-xl" />
        <TbBrandCpp className="text-xl ml-1" />
      </span>
    ),
    'HTML/CSS': (
      <span className="flex items-center">
        <FaHtml5 className="text-xl text-orange-500" />
        <FaCss3Alt className="text-xl ml-1 text-blue-500" />
      </span>
    ),
    JavaScript: <FaJs className="text-xl text-yellow-400" />,
    FastAPI: <SiFastapi className="text-xl text-teal-500" />,
    NodeJS: <FaNodeJs className="text-xl text-green-500" />,
    ExpressJS: <SiExpress className="text-xl" />,
    Docker: <SiDocker className="text-xl text-sky-400" />,
    Kafka: <SiApachekafka className="text-xl" />,
    Nginx: <SiNginx className="text-xl text-green-500" />,
    Prometheus: <SiPrometheus className="text-xl text-orange-500" />,
    Grafana: <SiGrafana className="text-xl text-orange-400" />,
    PostgreSQL: <SiPostgresql className="text-xl text-blue-400" />,
    MongoDB: <SiMongodb className="text-xl text-green-500" />,
    Redis: <SiRedis className="text-xl text-red-500" />,
    Git: <FaGitAlt className="text-xl text-orange-600" />,
    GitHub: <FaGithub className="text-xl" />,
    'VS Code': <SiVisualstudiocode className="text-xl text-blue-500" />,
  }

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Technologies',
      skills: [
        'FastAPI',
        'NodeJS',
        'ExpressJS',
        'Docker',
        'Kafka',
        'Nginx',
        'Prometheus',
        'Grafana',
      ],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card backdrop-blur-lg p-6 rounded-xl border border-gray-700/30"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full text-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <span>
                      {skillIconMap[skill] || <FaCode className="text-xl" />}
                    </span>
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Coding Proficiency</h3>
          <div className="flex justify-center">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 inline-flex items-center gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-2 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold">Codeforces</h4>
                <p className="text-indigo-400">Specialist (max. 1421)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
