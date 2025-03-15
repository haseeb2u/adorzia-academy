import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/components/auth/ProtectedRoute';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, signOut } = useAuth();
  
  // Determine if we're on the landing page
  const isLandingPage = location.pathname === '/';
  
  // Determine if we're in the admin section
  const isAdminPage = location.pathname.startsWith('/admin');

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

  // Different navigation items based on context
  const landingNavItems = [
    { name: 'Home', href: '/' },
    { name: 'StyleBox', href: '#stylebox' },
    { name: 'Partners', href: '#partners' },
    { name: 'Certification', href: '#certification' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const studentNavItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Courses', href: '/my-courses' },
  ];
  
  const adminNavItems = [
    { name: 'Admin Dashboard', href: '/admin' },
    { name: 'Manage Courses', href: '/admin' },
    { name: 'User Management', href: '/admin/users' },
    { name: 'Analytics', href: '/admin/analytics' },
  ];

  // Choose which navigation items to display
  let displayedNavItems = landingNavItems;
  
  if (isAuthenticated) {
    if (isAdminPage && user.role === 'admin') {
      displayedNavItems = adminNavItems;
    } else if (!isLandingPage) {
      displayedNavItems = studentNavItems;
    }
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isLandingPage
          ? isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-subtle' 
            : 'bg-transparent'
          : isAdminPage
            ? 'bg-adorzia-primary text-white'
            : 'bg-white shadow-subtle'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            "text-2xl font-serif font-bold tracking-tight",
            isAdminPage 
              ? "text-white" 
              : "text-adorzia-primary"
          )}
        >
          Adorzia <span className={isAdminPage ? "text-white opacity-80" : "text-adorzia-tertiary"}>Academy</span>
          {isAdminPage && <span className="ml-2 text-sm font-sans bg-white/20 px-2 py-1 rounded">Admin</span>}
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {displayedNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              className={cn(
                "font-medium transition-colors duration-200",
                isAdminPage 
                  ? "text-white/80 hover:text-white" 
                  : "text-adorzia-midGray hover:text-adorzia-primary",
                location.pathname === item.href && (isAdminPage ? "text-white" : "text-adorzia-primary")
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="text-sm mr-2">
                <span className={isAdminPage ? "text-white/80" : "text-adorzia-midGray"}>
                  {user.name} 
                  {user.role === 'admin' && !isAdminPage && (
                    <Link to="/admin" className="ml-2 text-adorzia-primary text-xs border border-current rounded-full px-2 py-0.5">
                      Admin Panel
                    </Link>
                  )}
                </span>
              </div>
              <Button 
                variant={isAdminPage ? "outline" : "ghost"} 
                className={isAdminPage ? "text-white hover:text-adorzia-primary" : "font-medium"}
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
              {!isAdminPage && (
                <Button 
                  className="bg-adorzia-primary hover:bg-adorzia-secondary text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              )}
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
          className={cn(
            "md:hidden p-2 focus:outline-none",
            isAdminPage ? "text-white" : "text-adorzia-darkGray"
          )}
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
          'fixed inset-0 z-40 flex flex-col pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out',
          isAdminPage ? 'bg-adorzia-primary' : 'bg-white',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          {displayedNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              className={cn(
                "font-medium text-xl transition-colors duration-200",
                isAdminPage 
                  ? "text-white/80 hover:text-white" 
                  : "text-adorzia-darkGray hover:text-adorzia-primary",
                location.pathname === item.href && (isAdminPage ? "text-white" : "text-adorzia-primary")
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
              <div className={cn(
                "text-center py-2 rounded-md",
                isAdminPage ? "bg-white/10 text-white" : "bg-adorzia-lightGray text-adorzia-darkGray"
              )}>
                Signed in as <strong>{user.name}</strong>
                <div className="text-xs mt-1">
                  {user.role === 'admin' 
                    ? 'Administrator Account' 
                    : 'Student Account'}
                </div>
              </div>
              
              {user.role === 'admin' && !isAdminPage && (
                <Button 
                  className="font-medium w-full justify-center text-lg py-6 bg-adorzia-primary text-white"
                  onClick={() => {
                    navigate('/admin');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Go to Admin Panel
                </Button>
              )}
              
              <Button 
                variant={isAdminPage ? "outline" : "ghost"} 
                className={cn(
                  "font-medium w-full justify-center text-lg py-6",
                  isAdminPage && "text-white border-white"
                )}
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Sign Out
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
