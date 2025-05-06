import ProjectsGrid from '../components/projects/ProjectsGrid';
import { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects | Ilyass Atide';
  }, []);

  return <ProjectsGrid />;
};

export default ProjectsPage;