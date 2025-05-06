import { Code, Database, Brain, Server } from 'lucide-react';

const SkillsOverview = () => {
  const skills = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain size={32} className="text-accent" />,
      description: 'PyTorch, TensorFlow, Neural Networks'
    },
    {
      name: 'Programming',
      icon: <Code size={32} className="text-accent" />,
      description: 'Python, Java, SQL, C#'
    },
    {
      name: 'Databases',
      icon: <Database size={32} className="text-accent" />,
      description: 'MySQL, PostgreSQL, MongoDB'
    },
    {
      name: 'Cloud & DevOps',
      icon: <Server size={32} className="text-accent" />,
      description: 'Azure, AWS, Git/GitHub'
    }
  ];

  return (
    <section id="skills-overview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-light inline-block">
          Skills Overview
        </h2>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="bg-background-light p-6 rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-background-lighter hover:border-accent/50"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-text-light mb-2">{skill.name}</h3>
              <p className="text-text">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="/skills" 
          className="text-accent font-medium hover:underline inline-flex items-center transition-all duration-300"
        >
          View All Skills
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SkillsOverview;