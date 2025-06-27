
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link to="/services/strategy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Strategy Consulting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic planning and business model design
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/services/operations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Operations Consulting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Process improvement and efficiency optimization
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/services/digital" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Digital Transformation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Technology strategy and digital modernization
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    <NavigationMenuLink asChild>
                      <Link to="/industries/startups" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Startups</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/industries/manufacturing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Manufacturing</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/industries/healthcare" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Healthcare</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/industries/nonprofits" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" onClick={handleLinkClick}>
                        <div className="text-sm font-medium leading-none">Nonprofits</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/case-studies" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/case-studies') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
                  Case Studies
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/resources" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/resources') ? 'text-primary' : 'text-gray-700'}`} onClick={handleLinkClick}>
                  Resources
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              <Link to="/services/strategy" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Strategy Consulting</Link>
              <Link to="/services/operations" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Operations Consulting</Link>
              <Link to="/services/digital" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary" onClick={handleLinkClick}>Digital Transformation</Link>
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
