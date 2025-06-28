
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Additional scroll to top for mobile menu
    setTimeout(() => window.scrollTo(0, 0), 50);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <span className="text-2xl font-bold text-primary">PONTBLANC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/services" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/services') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/industries" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/industries') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              Industries
            </Link>
            <Link to="/case-studies" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/case-studies') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              Case Studies
            </Link>
            <Link to="/blog" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              Blog
            </Link>
            <Link to="/resources" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/resources') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
              Resources
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/contact" onClick={handleLinkClick}>Book a Free Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>About</Link>
              <Link to="/services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Services</Link>
              <Link to="/industries" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Industries</Link>
              <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Case Studies</Link>
              <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Blog</Link>
              <Link to="/resources" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Resources</Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Contact</Link>
              <Button asChild className="w-full mt-4">
                <Link to="/contact" onClick={handleLinkClick}>Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
