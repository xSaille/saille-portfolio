import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import { useEffect } from 'react';

const ExperiencePage = () => {
  useEffect(() => {
    document.title = 'Experience | Ilyass Atide';
  }, []);

  return <ExperienceTimeline />;
};

export default ExperiencePage;