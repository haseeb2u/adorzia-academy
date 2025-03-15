
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Mock authentication - in a real app this would come from your auth provider
const useAuth = () => {
  // For demo purposes, let's just return true to simulate being logged in
  // In a real application, this would check if the user is authenticated
  return { 
    isAuthenticated: true,
    // Mock function to simulate logout
    signOut: () => console.log('User signed out')
  };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, signOut } = useAuth();

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

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'StyleBox', href: '#stylebox' },
    { name: 'Certification', href: '#certification' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const authNavItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Courses', href: '/my-courses' },
  ];

  // Combine navigation items based on authentication status
  const displayedNavItems = isAuthenticated 
    ? [...navItems.slice(0, 2), ...authNavItems, ...navItems.slice(2)]
    : navItems;

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
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-tight text-adorzia-primary"
        >
          Adorzia <span className="text-adorzia-tertiary">Academy</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {displayedNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              className={cn(
                "font-medium text-adorzia-midGray hover:text-adorzia-primary transition-colors duration-200",
                location.pathname === item.href && "text-adorzia-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                className="font-medium"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
              <Button 
                className="bg-adorzia-primary hover:bg-adorzia-secondary text-white"
                onClick={() => navigate('/dashboard')}
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="font-medium"
                onClick={() => navigate('/signin')}
              >
                Log in
              </Button>
              <Button 
                className="bg-adorzia-primary hover:bg-adorzia-secondary text-white"
                onClick={() => navigate('/signup')}
              >
                Join Now
              </Button>
            </>
          )}
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
          {displayedNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              className={cn(
                "font-medium text-xl text-adorzia-darkGray hover:text-adorzia-primary transition-colors duration-200",
                location.pathname === item.href && "text-adorzia-primary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto mb-10 flex flex-col space-y-4">
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                className="font-medium w-full justify-center text-lg py-6"
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign Out
              </Button>
              <Button 
                className="bg-adorzia-primary hover:bg-adorzia-secondary text-white w-full justify-center text-lg py-6"
                onClick={() => {
                  navigate('/dashboard');
                  setIsMobileMenuOpen(false);
                }}
              >
                My Account
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="font-medium w-full justify-center text-lg py-6"
                onClick={() => {
                  navigate('/signin');
                  setIsMobileMenuOpen(false);
                }}
              >
                Log in
              </Button>
              <Button 
                className="bg-adorzia-primary hover:bg-adorzia-secondary text-white w-full justify-center text-lg py-6"
                onClick={() => {
                  navigate('/signup');
                  setIsMobileMenuOpen(false);
                }}
              >
                Join Now
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
