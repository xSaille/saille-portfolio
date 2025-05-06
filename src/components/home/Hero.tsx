import React from 'react'; // Import React
// Import LucideIcon type if available and specific, otherwise use a general type
import { ArrowDownCircle, BrainCircuit, Database, BarChartBig, LucideIcon } from 'lucide-react'; 
import { Link } from 'react-scroll';

// Define Props type for TechIcon
interface TechIconProps {
  icon: LucideIcon | React.ComponentType<{ size?: number; strokeWidth?: number }>; // Accept Lucide icons or similar components
  delay: string;
  size?: number; // Optional size
  strokeWidth?: number; // Optional strokeWidth
}

// Define TechIcon as a Functional Component with typed props
const TechIcon: React.FC<TechIconProps> = ({ 
  icon: Icon, // Rename destructured prop icon to Icon
  delay, 
  size = 64, // Default size
  strokeWidth = 1.5 // Default strokeWidth
}) => (
  <div 
    className="opacity-0 animate-fade-in-up transition-transform duration-300 ease-out hover:scale-110"
    style={{ animationDelay: delay }}
  >
    {/* Render the passed Icon component with props */}
    <Icon 
      size={size} 
      strokeWidth={strokeWidth} 
      className="text-accent/50 transition-colors duration-300 ease-out group-hover:text-accent/80" 
    />
  </div>
);


const Hero: React.FC = () => { // Add React.FC type to Hero
  const baseDelay = 0.6; 

  return (
    <section className="h-screen flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Left Column: Text Content (Keep as before) */}
      <div className="w-full md:w-3/5 lg:w-1/2 md:pr-8 flex flex-col justify-center">
         {/* ... (rest of your left column code remains the same) ... */}
         <div className="mb-8 md:mb-6 text-center md:text-left">
           <p className="text-accent font-mono mb-5 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>Hi, my name is</p>
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-light mb-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             Ilyass Atide.
           </h1>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
             I build AI-driven solutions.
           </h2>
           <div className="max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <p className="text-text text-lg mb-8">
               I'm a final-year MIAGE student based in Casablanca, specializing in building AI-driven solutions 
               and exploring data systems. Passionate about leveraging technology, particularly machine learning, 
               for innovation in healthcare and finance.
             </p>
           </div>
           <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
             <Link 
               to="/projects" 
               className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-medium"
             >
               View Projects
             </Link>
             <Link 
               to="/contact" 
               className="px-6 py-3 bg-accent text-background rounded hover:bg-accent/90 transition-all duration-300 font-medium"
             >
               Get In Touch
             </Link>
           </div>
         </div>
      </div>

      {/* Right Column: Enhanced Icon Cluster */}
      <div 
        className="hidden md:flex md:w-2/5 lg:w-1/2 md:pl-8 items-center justify-center" 
      >
         <div className="flex flex-col space-y-10 group"> 
            <TechIcon icon={BrainCircuit} delay={`${baseDelay + 0.1}s`} />
            <TechIcon icon={Database} delay={`${baseDelay + 0.2}s`} />
            <TechIcon icon={BarChartBig} delay={`${baseDelay + 0.3}s`} />
         </div>
      </div>
      
      {/* Arrow */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <Link 
          to="about-preview" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer animate-bounce inline-block"
        >
          <ArrowDownCircle size={32} className="text-accent" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;