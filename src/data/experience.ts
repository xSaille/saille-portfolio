import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'brams',
    title: 'AI/Data Engineer Intern',
    company: 'BRAMS',
    location: 'Casablanca, Morocco',
    startDate: 'Apr 2025',
    endDate: 'Present',
    description: [
      'Lead the integration of Retrieval Augmented Generation (RAG) with enterprise data systems, enhancing AI response accuracy and relevance.',
      'Analyze complex datasets to extract actionable insights and patterns for business decision-making.',
      'Troubleshoot production issues and implement optimization solutions to improve system performance.',
      'Collaborate with cross-functional teams to align AI solutions with business objectives.'
    ],
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'Azure ML Studio', 'SQL']
  },
  {
    id: 'alliantis',
    title: 'Accounting Intern',
    company: 'Alliantis',
    location: 'Casablanca, Morocco',
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    description: [
      'Applied data analysis techniques to financial datasets, extracting meaningful business insights.',
      'Gained exposure to business operations and financial processes in a professional environment.',
      'Developed practical understanding of how data systems support business decision-making.'
    ],
    technologies: ['Data Analysis', 'Financial Systems', 'Business Operations']
  },
  {
    id: 'freelance',
    title: 'Software Developer',
    company: 'Freelance',
    location: 'Remote',
    startDate: 'Feb 2018',
    endDate: 'Jul 2021',
    description: [
      'Developed a comprehensive business communication and management platform for startups, featuring CRM capabilities and project management tools.',
      'Built and deployed custom Minecraft servers with advanced gameplay features, monetization systems, and performance optimization.',
      'Engineered backend systems for client applications, including website integrations, REST APIs, and database management solutions.',
      'Designed efficient, scalable database architectures to support high-traffic environments.',
      'Delivered technical consulting and backend development services to a diverse range of clients, helping them solve complex infrastructure and deployment challenges.'
    ],
    technologies: ['Java', 'Spring Boot', 'PHP', 'MySQL', 'Server Administration']
  }
];