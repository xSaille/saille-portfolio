import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { getFeaturedProjects } from '../../data/projects';
import { Project } from '../../types';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getFeaturedProjects());
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-light inline-block">
          Featured Projects
        </h2>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`relative md:grid ${
              index % 2 === 0 
                ? 'md:grid-cols-[3fr_2fr] md:text-left' 
                : 'md:grid-cols-[2fr_3fr] md:text-right'
            } gap-10 items-center`}
          >
            {/* Mobile Image */}
            <div className="md:hidden mb-6">
              <div className="relative rounded-lg overflow-hidden h-[250px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/50"></div>
              </div>
            </div>
            
            {/* Project Content */}
            <div className={`z-10 ${index % 2 !== 0 && 'md:order-2'}`}>
              <p className="text-accent font-mono mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-text-light mb-4">
                {project.title}
              </h3>
              
              <div className="bg-background-light p-6 rounded-lg shadow-lg mb-4">
                <p className="text-text">{project.description}</p>
              </div>
              
              <ul className={`flex flex-wrap text-sm gap-3 text-text mb-6 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.technologies.map(tech => (
                  <li key={tech} className="font-mono">{tech}</li>
                ))}
              </ul>
              
              <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={20} />
                  <span>GitHub Repository</span>
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-light hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className={`hidden md:block ${index % 2 !== 0 && 'md:order-1'}`}>
              <div className="relative rounded-lg overflow-hidden h-[300px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/50 hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <a 
          href="/projects" 
          className="px-6 py-3 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-medium"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;