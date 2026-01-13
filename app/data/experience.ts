import { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Lead developer for the core platform team. Responsible for architecting and implementing scalable microservices and improving system performance by 40%.',
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Creative Web Agency',
    period: '2020 - 2022',
    location: 'Remote',
    description: 'Developed and maintained various client projects ranging from e-commerce sites to internal management tools. Focused on React frontend and Node/Express backend.',
    technologies: ['React', 'Next.js', 'Express', 'MongoDB', 'TailwindCSS'],
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'Startup Hub',
    period: '2019 - 2020',
    location: 'London, UK',
    description: 'Contributed to the development of a social networking platform for startups. Assisted in building UI components and integrating with backend APIs.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Firebase'],
  },
]
