import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-accent font-bold text-2xl">
              <div className="flex flex-col items-start leading-tight">
                <span className="text-text-light">Ilyass</span>
                <span className="ml-7">Atide</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`
                  text-base font-medium transition-colors duration-300
                  ${location.pathname === item.path 
                    ? 'text-accent' 
                    : 'text-text-light hover:text-accent'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="../../resources/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 text-base"  // Changed from text-sm
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-background w-3/4 shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-text-light hover:text-accent transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                text-xl font-medium flex items-center transition-colors duration-300
                ${location.pathname === item.path 
                  ? 'text-accent' 
                  : 'text-text-light hover:text-accent'
                }
              `}
            >
              {item.name}
              <ChevronRight size={20} className="ml-2" />  {/* Increased size from 16 to 20 */}
            </Link>
          ))}
          <a
            href="../..//resources/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 text-xl"  // Changed from text-lg
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;