import React from 'react'
import russellLogo from '../assets/russell.svg'
import sptbiLogo from '../assets/SPTBI.svg'

export const workExperiencesData = [
  {
    title: 'Global Technology Intern',
    organization: 'Russell Investments',
    location: 'Mumbai, India',
    period: 'May 2026 – July 2026',
    description:
      'Designed and delivered an advisor-facing intelligence platform that unified structured analytics and unstructured knowledge retrieval.',
    achievements: [
      'Solo-architected and delivered a multi-agent AI platform using LangGraph, LangChain, FastAPI, and React for Russell Investments\' US Advisor Intermediary Solutions business, reducing advisor call-preparation time from 30-45 minutes to under 5 minutes',
      'Built a hybrid RAG pipeline combining dense vector retrieval and BM25 search across 1,000+ investment documents, enabling source-grounded responses for product, strategy, and sales-content queries',
      'Designed a query decomposition and routing framework that classified natural-language requests into structured analytics (Power BI/Snowflake KPI data) and unstructured knowledge retrieval workflows behind a single interface',
      'Developed a supervisor-agent architecture coordinating Product, Analytics, and Call-Prep agents, enabling intent-aware routing and automated advisor intelligence generation',
    ],
    technologies: [
      'LangGraph',
      'LangChain',
      'FastAPI',
      'React',
      'BM25',
      'Snowflake',
      'Power BI',
    ],
    metrics: [
      { label: 'Prep Time Reduction', value: '30-45m to <5m' },
      { label: 'Knowledge Corpus', value: '1,000+ docs' },
    ],
    logo: russellLogo,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    ),
  },
  {
    title: 'Fullstack Developer Intern',
    organization: 'SPTBI (Sardar Patel Technology Business Incubator)',
    location: 'Mumbai, India',
    period: 'July 2025 – August 2025',
    description:
      'Developed innovative solutions for incubatee management and support systems.',
    achievements: [
      'Designed and implemented a role-based room booking module for incubatees, supporting both direct paid bookings and admin-approved workflows for restricted rooms; adopted by 110+ startups',
      'Built an internal ticketing system enabling incubatees to raise issues or support requests, significantly improving response time and administrative coordination',
      'Refactored over 6000 lines of legacy code, reducing codebase size by 85% while introducing new features and improving maintainability',
    ],
    technologies: ['NodeJS', 'ExpressJS', 'MongoDB', 'JavaScript'],
    metrics: [
      { label: 'Startups Served', value: '110+' },
      { label: 'Code Reduction', value: '85%' },
    ],
    logo: sptbiLogo,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
        />
      </svg>
    ),
  },
]
