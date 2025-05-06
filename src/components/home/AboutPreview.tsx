import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section id="about-preview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-light inline-block">
          About Me
        </h2>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
      
      <div className="md:grid md:grid-cols-[3fr_2fr] gap-12 items-center">
        <div>
          <p className="text-text mb-4 leading-relaxed">
            Hello! I'm Ilyass, a final-year MIAGE (Methods Applied to Business Management and Information Technology) 
            student at the International University of Casablanca, specializing in AI, Machine Learning, and Software 
            Engineering.
          </p>
          
          <p className="text-text mb-4 leading-relaxed">
            My fascination with technology began early, but it was during my university studies that I discovered my passion 
            for AI and its potential to solve complex problems. I'm particularly drawn to neural networks and their 
            applications in healthcare and finance.
          </p>
          
          <p className="text-text mb-6 leading-relaxed">
            As I prepare to graduate, I'm focused on becoming a Machine Learning Engineer and eventually pursuing a PhD in 
            Neural Networks, where I hope to contribute to the advancement of AI technologies.
          </p>
          
          <Link 
            to="/about" 
            className="text-accent font-medium hover:underline inline-flex items-center transition-all duration-300"
          >
            Learn more about me
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="mt-8 md:mt-0">
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-accent z-10">
              <img 
                src="../../resources/personal-picture.jpeg" 
                alt="Ilyass Atide" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="absolute -top-4 -right-4 h-full w-full rounded-md border-2 border-accent z-0 transition-all duration-300 group-hover:top-0 group-hover:right-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;