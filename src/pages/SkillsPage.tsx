import SkillsList from '../components/skills/SkillsList';
import { useEffect } from 'react';

const SkillsPage = () => {
  useEffect(() => {
    document.title = 'Skills | Ilyass Atide';
  }, []);

  return <SkillsList />;
};

export default SkillsPage;