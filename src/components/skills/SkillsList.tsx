import { skillCategories } from '../../data/skills';
import { SkillCategory as SkillCategoryType } from '../../types';

const SkillsList = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-light inline-block">
          Skills
        </h1>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        <p className="mt-6 text-text max-w-2xl mx-auto">
          Here's a comprehensive overview of my technical and professional skills,
          developed through academic studies, professional experiences, and personal projects.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

const SkillCategory = ({ category, index }: { category: SkillCategoryType; index: number }) => {
  return (
    <div 
      className="bg-background-light rounded-lg p-8 border border-background-lighter hover:border-accent/30 transition-all duration-300"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h2 className="text-xl font-bold text-text-light mb-6 pb-3 border-b border-background-lighter">
        {category.name}
      </h2>
      
      <div className="space-y-6">
        {category.skills.map(skill => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-text-light">{skill.name}</span>
              <span className="text-sm text-text">
                {getSkillLevelLabel(skill.level)}
              </span>
            </div>
            <div className="w-full bg-background-lighter rounded-full h-2.5">
              <div 
                className="bg-accent h-2.5 rounded-full" 
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getSkillLevelLabel = (level: number): string => {
  switch (level) {
    case 1: return 'Basic';
    case 2: return 'Intermediate';
    case 3: return 'Proficient';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return '';
  }
};

export default SkillsList;