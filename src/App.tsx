import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'; // 1. Import the ScrollToTop component
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 2. Place the ScrollToTop component here */}
      <Layout>
        <Routes>
          <Route path="/saille-portfolio/" element={<HomePage />} />
          <Route path="/saille-portfolio/about" element={<AboutPage />} />
          <Route path="/saille-portfolio/skills" element={<SkillsPage />} />
          <Route path="/saille-portfolio/projects" element={<ProjectsPage />} />
          <Route path="/saille-portfolio/experience" element={<ExperiencePage />} />
          <Route path="/saille-portfolio/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;