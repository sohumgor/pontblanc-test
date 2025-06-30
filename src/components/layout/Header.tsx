
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname === path) {
      navigate(path, { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  const navLinkClasses = `px-2 py-2 text-sm font-medium transition-all duration-200
    rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-md hover:scale-[1.03]
    focus:outline-none focus:text-blue-600 focus:bg-gray-50 focus:shadow-md focus:scale-[1.03]`;

  const activeLinkClasses = 'text-blue-600 bg-gray-100 shadow-md scale-[1.03]';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleNavClick('/')}>
            <span className="text-2xl font-bold text-primary">PontBlanc</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex w-full justify-center">
            <NavigationMenuList className="flex gap-6 items-center h-full">
              <div className="flex items-center gap-6">
                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/')}
                    className={`${navLinkClasses} ${isActive('/') ? activeLinkClasses : ''}`}
                  >
                    Home
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/about')}
                    className={`${navLinkClasses} ${isActive('/about') ? activeLinkClasses : ''}`}
                  >
                    About
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/services')}
                    className={`${navLinkClasses} ${isActive('/services') ? activeLinkClasses : ''}`}
                  >
                    Services
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/industries')}
                    className={`${navLinkClasses} ${isActive('/industries') ? activeLinkClasses : ''}`}
                  >
                    Industries
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/case-studies')}
                    className={`${navLinkClasses} ${isActive('/case-studies') ? activeLinkClasses : ''}`}
                  >
                    Case Studies
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button
                    onClick={() => handleNavClick('/blog')}
                    className={`${navLinkClasses} ${isActive('/blog') ? activeLinkClasses : ''}`}
                  >
                    Blog
                  </button>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/contact" onClick={() => handleNavClick('/contact')}>Book a Free Consultation</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <button onClick={() => handleNavClick('/')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Home</button>
              <button onClick={() => handleNavClick('/about')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">About</button>
              <button onClick={() => handleNavClick('/services')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Services</button>
              <button onClick={() => handleNavClick('/industries')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Industries</button>
              <button onClick={() => handleNavClick('/case-studies')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Case Studies</button>
              <button onClick={() => handleNavClick('/blog')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Blog</button>
              <button onClick={() => handleNavClick('/contact')} className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">Contact</button>
              <Button asChild className="w-full mt-4">
                <Link to="/contact" onClick={() => handleNavClick('/contact')}>Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
