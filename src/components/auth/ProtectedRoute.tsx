
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Mock authentication - in a real app this would come from your auth provider
const useAuth = () => {
  // For demo purposes we'll just return true to simulate being logged in
  // In a real application, this would check if the user is authenticated
  return { isAuthenticated: true };
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
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
  
  return <>{children}</>;
};

export default ProtectedRoute;
