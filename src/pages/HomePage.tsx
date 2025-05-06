import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import SkillsOverview from '../components/home/SkillsOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsOverview />
      <FeaturedProjects />
    </>
  );
};

export default HomePage;