import { Brain, School, Target, Heart } from 'lucide-react';

const AboutMe = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-light inline-block">
          About Me
        </h1>
        <div className="mt-2 h-[1px] w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
      
      <div className="md:grid md:grid-cols-[3fr_2fr] gap-16 items-start">
        <div>
          <h2 className="text-2xl font-bold text-text-light mb-6">
            Introduction
          </h2>
          
          <div className="space-y-6 text-text">
            <p className="leading-relaxed">
              Hello! I'm Ilyass Atide, a final-year MIAGE (Methods Applied to Business Management and Information Technology) 
              student at the International University of Casablanca. My academic journey has been focused on the intersection 
              of business management and information technology, with a growing specialization in Artificial Intelligence and 
              Machine Learning.
            </p>
            
            <p className="leading-relaxed">
              My fascination with technology began early, but it was during my university studies that I discovered my passion 
              for AI and its potential to solve complex problems. I'm particularly drawn to neural networks and their 
              applications in various domains, especially healthcare and finance.
            </p>
            
            <p className="leading-relaxed">
              Through my coursework, internships, and personal projects, I've developed a strong foundation in programming, 
              data analysis, and machine learning techniques. I believe in the power of technology to transform industries 
              and improve lives, and I'm excited to contribute to this transformation.
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-light mb-6">
              Professional Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background-light p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 border border-background-lighter hover:border-accent/50">
                <h3 className="text-text-light font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Problem-Solving
                </h3>
                <p className="text-text">
                  I approach problems methodically, breaking them down into manageable components and developing systematic solutions.
                </p>
              </div>
              
              <div className="bg-background-light p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 border border-background-lighter hover:border-accent/50">
                <h3 className="text-text-light font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Team Collaboration
                </h3>
                <p className="text-text">
                  I value diverse perspectives and believe in the power of collaboration to create innovative solutions.
                </p>
              </div>
              
              <div className="bg-background-light p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 border border-background-lighter hover:border-accent/50">
                <h3 className="text-text-light font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time Management
                </h3>
                <p className="text-text">
                  I prioritize tasks effectively and maintain productivity through organized workflows and strategic planning.
                </p>
              </div>
              
              <div className="bg-background-light p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300 border border-background-lighter hover:border-accent/50">
                <h3 className="text-text-light font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Continuous Improvement
                </h3>
                <p className="text-text">
                  I embrace feedback and constantly seek to enhance my skills and knowledge through learning and adaptation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0">
          <div className="sticky top-24">
            <div className="bg-background-light rounded-lg p-8 mb-8 border border-background-lighter">
              <div className="flex items-center mb-4">
                <Brain size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-bold text-text-light">Career Goals</h3>
              </div>
              <p className="text-text leading-relaxed">
                My aspiration is to become a Machine Learning Engineer, developing AI solutions that address real-world challenges.
                Long-term, I plan to pursue a PhD in Neural Networks, where I can contribute to advancing the field through research 
                and innovation.
              </p>
            </div>
            
            <div className="bg-background-light rounded-lg p-8 mb-8 border border-background-lighter">
              <div className="flex items-center mb-4">
                <School size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-bold text-text-light">Education</h3>
              </div>
              <p className="text-text-light font-semibold">BSc MIAGE</p>
              <p className="text-text">International University of Casablanca</p>
              <p className="text-text italic">Expected Aug 2025</p>
            </div>
            
            <div className="bg-background-light rounded-lg p-8 mb-8 border border-background-lighter">
              <div className="flex items-center mb-4">
                <Target size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-bold text-text-light">Focus Areas</h3>
              </div>
              <ul className="list-disc list-inside text-text space-y-2">
                <li>Neural Networks & Deep Learning</li>
                <li>Healthcare AI Applications</li>
                <li>Financial Technology Solutions</li>
                <li>Ethical AI Development</li>
              </ul>
            </div>
            
            <div className="bg-background-light rounded-lg p-8 border border-background-lighter">
              <div className="flex items-center mb-4">
                <Heart size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-bold text-text-light">Interests</h3>
              </div>
              <p className="text-text leading-relaxed">
                Outside of technology, I enjoy playing football, which teaches teamwork and strategy, and strength training, 
                which builds discipline and perseverance – qualities that transfer well to my professional life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;