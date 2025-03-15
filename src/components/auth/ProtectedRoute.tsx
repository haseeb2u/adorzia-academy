
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Improved authentication hook with more robust implementation
const useAuth = () => {
  // For demo purposes we're simulating authentication state
  // In a real app, this would connect to a backend service
  const storedUser = localStorage.getItem('adorziaUser');
  const isAuthenticated = !!storedUser;
  
  let user = {
    name: "Guest",
    email: "",
    role: "guest"
  };
  
  if (isAuthenticated && storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (e) {
      console.error("Failed to parse stored user data");
    }
  }
  
  const signIn = (email: string, password: string) => {
    // In a real app, this would validate credentials against a backend
    // For demo, we'll authenticate any email with password longer than 5 chars
    if (password.length >= 6) {
      const userData = {
        name: email.split('@')[0],
        email: email,
        role: email.includes('admin') ? 'admin' : 'student'
      };
      
      localStorage.setItem('adorziaUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };
  
  const signOut = () => {
    localStorage.removeItem('adorziaUser');
    console.info("User signed out");
  };
  
  return { 
    isAuthenticated,
    user,
    signIn,
    signOut
  };
};

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  
  if (!isAuthenticated) {
    // Notify the user they need to log in
    toast({
      variant: "destructive",
      title: "Authentication required",
      description: "Please sign in to access this page",
    });
    
    // Redirect to the sign-in page, but save the location they were trying to access
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  
  // Role-based access check
  if (requiredRole && user.role !== requiredRole) {
    toast({
      variant: "destructive",
      title: "Access denied",
      description: `You need ${requiredRole} privileges to access this page`,
    });
    
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
export { useAuth };
