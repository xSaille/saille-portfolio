export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}