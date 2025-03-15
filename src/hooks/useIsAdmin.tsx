
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/auth/ProtectedRoute';

// Hook to check if the current user has admin privileges
const useIsAdmin = (): boolean => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  
  useEffect(() => {
    // Check if the current user has admin role
    setIsAdmin(user.role === 'admin');
    
    // For legacy compatibility - check localStorage as well
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    if (storedIsAdmin && user.role !== 'admin') {
      // This ensures the UI reflects admin status even if not set in user object
      setIsAdmin(true);
    }
  }, [user]);
  
  return isAdmin;
};

export default useIsAdmin;
