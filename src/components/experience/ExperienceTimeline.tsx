import { experiences } from '../../data/experience';
import { Experience } from '../../types';

const ExperienceTimeline = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-light inline-block">
          Experience
        </h1>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        <p className="mt-6 text-text max-w-2xl mx-auto">
          A brief summary of my professional journey.
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-background-lighter"></div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  isEven: boolean;
}

const ExperienceCard = ({ experience, isEven }: ExperienceCardProps) => {
  return (
    <div className="relative">
      {/* Mobile View (Stacked) */}
      <div className="md:hidden bg-background-light rounded-lg p-6 border border-background-lighter hover:border-accent/50 transition-all duration-300">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text-light">{experience.title}</h3>
          <h4 className="text-accent mt-1">{experience.company}</h4>
          <p className="text-text text-sm">{experience.location}</p>
          <p className="text-text text-sm mt-1">{experience.startDate} - {experience.endDate}</p>
        </div>
        
        <ul className="list-disc list-inside text-text space-y-2 mb-4">
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(tech => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-full bg-background-lighter text-accent font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Desktop View (Timeline) */}
      <div className="hidden md:flex items-center">
        {/* Left side */}
        <div className={`flex-1 ${!isEven && 'order-2'}`}>
          <div className={`
            bg-background-light rounded-lg p-6 border border-background-lighter
            hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1
            ${isEven ? 'mr-12' : 'ml-12'} max-w-xl
          `}>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-text-light">{experience.title}</h3>
              <h4 className="text-accent mt-1">{experience.company}</h4>
              <p className="text-text text-sm">{experience.location}</p>
            </div>
            
            <ul className="list-disc list-inside text-text space-y-2 mb-4">
              {experience.description.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map(tech => (
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

        {/* Timeline dot and line */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
            <div className="absolute w-8 h-[2px] bg-background-lighter top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        {/* Right side - Date */}
        <div className={`flex-1 ${isEven && 'order-2'}`}>
          {/* Added text alignment based on even/odd */}
          <div className={`py-3 ${isEven ? 'pl-12' : 'pr-12 text-right'} text-sm font-mono`}>
            <span className="text-text-light/70 whitespace-nowrap">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;