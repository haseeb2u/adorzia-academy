
import { useState, useEffect } from 'react';

// In a real app, this would check the user's role from your auth system
const useIsAdmin = (): boolean => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // For demo purposes, we'll use localStorage to toggle admin mode
    // In a real application, this would verify admin status through your authentication system
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(storedIsAdmin);
    
    // Listen for storage events to update admin state across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'isAdmin') {
        setIsAdmin(e.newValue === 'true');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return isAdmin;
};

export default useIsAdmin;
