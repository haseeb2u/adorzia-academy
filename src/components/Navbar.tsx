
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'StyleBox', href: '#stylebox' },
    { name: 'Certification', href: '#certification' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-serif font-bold tracking-tight text-adorzia-primary"
        >
          Adorzia <span className="text-adorzia-tertiary">Academy</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-adorzia-midGray hover:text-adorzia-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="font-medium">
            Log in
          </Button>
          <Button className="bg-adorzia-primary hover:bg-adorzia-secondary text-white">
            Join Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-adorzia-darkGray p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-xl text-adorzia-darkGray hover:text-adorzia-primary transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-auto mb-10 flex flex-col space-y-4">
          <Button variant="ghost" className="font-medium w-full justify-center text-lg py-6">
            Log in
          </Button>
          <Button className="bg-adorzia-primary hover:bg-adorzia-secondary text-white w-full justify-center text-lg py-6">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
