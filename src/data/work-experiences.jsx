import React from 'react'

export const workExperiencesData = [
  {
    title: 'Software Developer Intern',
    organization: 'SP-TBI (Sardar Patel Technology Business Incubator)',
    location: 'Mumbai, India',
    period: 'July 2025 – August 2025',
    description:
      'Developed innovative solutions for incubatee management and support systems.',
    achievements: [
      'Built a role-based room booking module for incubatees, supporting two workflows: direct paid bookings and admin-approved bookings for restricted rooms; used by 50+ incubatees',
      'Developed a ticketing system for incubatees to raise issues or support requests, streamlining communication with the administration',
      'Refactored a 6000+ line legacy codebase into a clean, modular structure of 1000 lines, significantly improving readability, maintainability, and scalability',
    ],
    // technologies: ['Django', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
    metrics: [
      { label: 'Active Users', value: '50+' },
      { label: 'Code Reduction', value: '83%' },
    ],
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
