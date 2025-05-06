import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { Project } from '../../types';

const ProjectsGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Extract unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();
  
  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.technologies.includes(selectedFilter)
        )
      );
    }
  }, [selectedFilter]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-light inline-block">
          Projects
        </h1>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        <p className="mt-6 text-text max-w-2xl mx-auto">
          A collection of projects that showcase my skills and experience in AI, Machine Learning, and Software Engineering.
        </p>
      </div>
      
      {/* Filters */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-3 min-w-max">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded text-sm transition-all duration-300 ${
              selectedFilter === 'all'
              ? 'bg-accent text-background font-medium'
              : 'bg-background-light text-text-light hover:bg-background-lighter'
            }`}
          >
            All Projects
          </button>
          
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded text-sm transition-all duration-300 ${
                selectedFilter === tech
                ? 'bg-accent text-background font-medium'
                : 'bg-background-light text-text-light hover:bg-background-lighter'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text text-lg">No projects match the selected filter.</p>
          <button
            onClick={() => setSelectedFilter('all')}
            className="mt-4 text-accent hover:underline"
          >
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;