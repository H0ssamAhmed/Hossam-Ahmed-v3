import { Education } from '../types'

export const education: Education[] = [
  {
    id: 1,
    degree: 'MS in Computer Science',
    institution: 'Stanford University',
    period: '2017 - 2019',
    location: 'Stanford, CA',
    description: 'Specialized in Software Engineering and Distributed Systems. Conducted research on cloud infrastructure optimization.',
    achievements: [
      'GPA: 3.9/4.0',
      'Graduate Research Fellowship',
      'Best Thesis Award in Software Systems',
    ],
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'BS in Computer Engineering',
    institution: 'Georgia Institute of Technology',
    period: '2013 - 2017',
    location: 'Atlanta, GA',
    description: 'Foundation in computer architecture, algorithms, and software development. Active member of the Competitive Programming Club.',
    achievements: [
      'Dean\'s List for 6 semesters',
      'President of Web Development Society',
      '3rd Place at Regional Hackathon',
    ],
    icon: '🏫',
  },
]
