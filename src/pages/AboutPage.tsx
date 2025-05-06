import AboutMe from '../components/about/AboutMe';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Ilyass Atide';
  }, []);

  return <AboutMe />;
};

export default AboutPage;