
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Authentication hook with improved security
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
    // Check for admin user in localStorage (for updateable admin credentials)
    const storedAdminEmail = localStorage.getItem('adminEmail');
    const storedAdminPassword = localStorage.getItem('adminPassword');
    
    // Check against stored admin credentials if they exist
    if (storedAdminEmail && storedAdminPassword) {
      if (email === storedAdminEmail && password === storedAdminPassword) {
        const userData = {
          name: 'Administrator',
          email: storedAdminEmail,
          role: 'admin'
        };
        
        localStorage.setItem('adorziaUser', JSON.stringify(userData));
        return true;
      }
    } 
    // Default admin fallback (only if no custom admin credentials set)
    else if (email === 'admin' && password === 'admin') {
      const userData = {
        name: 'Administrator',
        email: 'admin@adorzia.com',
        role: 'admin'
      };
      
      localStorage.setItem('adorziaUser', JSON.stringify(userData));
      return true;
    }
    
    // For regular users, we'll authenticate any email with password longer than 5 chars
    if (password.length >= 6) {
      const userData = {
        name: email.split('@')[0],
        email: email,
        role: 'student'
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
  
  // Function to update admin credentials
  const updateAdminCredentials = (newEmail: string, newPassword: string) => {
    // Verify current user is admin before allowing credential update
    const currentUser = JSON.parse(localStorage.getItem('adorziaUser') || '{}');
    if (currentUser.role !== 'admin') {
      return false;
    }
    
    localStorage.setItem('adminEmail', newEmail);
    localStorage.setItem('adminPassword', newPassword);
    
    // Update current user email if admin is changing their own email
    if (currentUser.email !== newEmail) {
      currentUser.email = newEmail;
      localStorage.setItem('adorziaUser', JSON.stringify(currentUser));
    }
    
    return true;
  };
  
  // Function to check if a user exists
  const userExists = (email: string) => {
    // In a real app, this would check against a user database
    // For this demo, we'll always return false to allow new registrations
    return false;
  };
  
  // Function to create a new user with admin privileges
  const createAdminUser = (name: string, email: string, password: string) => {
    // In a real app, this would create a new user with admin privileges in the database
    // For this demo, we'll simulate successful creation
    return true;
  };
  
  // Function to invite a user to join as admin
  const inviteAdmin = (email: string, message: string = '') => {
    // In a real app, this would send an invitation email with a special sign-up link
    // For this demo, we'll simulate successful invitation
    return true;
  };
  
  return { 
    isAuthenticated,
    user,
    signIn,
    signOut,
    updateAdminCredentials,
    userExists,
    createAdminUser,
    inviteAdmin
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
  
  // Strict role-based access check for admin routes
  if (requiredRole === 'admin' && user.role !== 'admin') {
    toast({
      variant: "destructive",
      title: "Access denied",
      description: "You need administrator privileges to access this page",
    });
    
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
export { useAuth };
