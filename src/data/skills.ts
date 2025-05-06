import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'Java', level: 5 },
      { name: 'C#', level: 4 },
      { name: 'PHP', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'C', level: 3 },
      { name: 'R', level: 2}
    ]
  },
  {
    id: 'aiml',
    name: 'AI/ML/DL & Data',
    skills: [
      { name: 'Machine Learning', level: 5 },
      { name: 'Deep Learning', level: 4 },
      { name: 'Data Analysis', level: 4 },
      { name: 'PyTorch', level: 4 },
      { name: 'TensorFlow', level: 3 },
      { name: 'Neural Networks', level: 3 }
    ]
  },
  {
    id: 'web',
    name: 'Web & Frameworks',
    skills: [
      { name: 'Spring Boot', level: 4 },
      { name: '.NET', level: 3 }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & Tools',
    skills: [
      { name: 'Azure', level: 3 },
      { name: 'AWS', level: 3 },
      { name: 'Git/GitHub', level: 4 },
      { name: 'Docker', level: 3 }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    skills: [
      { name: 'MySQL', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'MongoDB', level: 3 }
    ]
  },
  {
    id: 'professional',
    name: 'Professional Skills',
    skills: [
      { name: 'Problem-Solving', level: 5 },
      { name: 'Team Collaboration', level: 4 },
      { name: 'Time Management', level: 4 },
      { name: 'Continuous Improvement', level: 5 }
    ]
  },
  {
    id: 'languages',
    name: 'Languages',
    skills: [
      { name: 'Arabic (Native)', level: 5 },
      { name: 'English (Fluent)', level: 5 },
      { name: 'French (C1)', level: 4 },
    ]
  }
];