import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-text-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
        <div className="flex justify-center space-x-6 mb-4"> {/* Added justify-center */}
            <a 
              href="https://github.com/xSaille" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-light hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ilyass-atide-3a20b5336/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-light hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:at.ilyass03@gmail.com" 
              className="text-text-light hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {currentYear} Ilyass Atide. All rights reserved.
              </p>
            </div>
            
            <div className="hidden md:block text-sm">
              <p>Casablanca, Morocco</p>
            </div>
          </div>
          
          <div className="mt-6 md:hidden text-center">
            <p className="text-sm">Casablanca, Morocco</p>
          </div>
          
          <div className="mt-6 text-center text-xs text-text">
            <p>Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;