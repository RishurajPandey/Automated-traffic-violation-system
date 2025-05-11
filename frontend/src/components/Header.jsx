import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:py-5 ${
        isScrolled ? 'bg-slate-800/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-red-600 mr-2" />
          <h1 className="text-xl font-bold text-white">(Cyberthon-team)</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Features', 'Statistics', 'Team'].map((item) => (
            <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-bold hover:text-red-500 transition-colors"
          >
            {item}
          </a>         
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col font-bold space-y-4">
              {['Home', 'Features', 'Statistics', 'Team'].map((item) => (
                <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold hover:text-red-500 transition-colors"
              >
                {item}
              </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;