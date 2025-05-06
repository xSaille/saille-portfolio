import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-background-light rounded-lg overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-background-lighter hover:border-accent/50">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image || 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/70 group-hover:bg-background/40 transition-all duration-300"></div>
        
        {/* Overlay with icons */}
        <div className="absolute top-4 right-4 flex space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full text-text-light hover:text-accent transition-colors duration-300"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full text-text-light hover:text-accent transition-colors duration-300"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-text-light font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-text mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 rounded-full bg-background-lighter text-accent font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;