
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ShieldOff } from 'lucide-react';

const ToggleAdminMode = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(storedIsAdmin);
  }, []);
  
  const toggleAdminMode = () => {
    const newValue = !isAdmin;
    localStorage.setItem('isAdmin', newValue.toString());
    setIsAdmin(newValue);
    
    // Reload to apply changes
    window.location.reload();
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="fixed bottom-4 right-4 z-50 bg-white shadow-md"
      onClick={toggleAdminMode}
    >
      {isAdmin ? (
        <>
          <ShieldOff size={16} className="mr-2" />
          Exit Admin Mode
        </>
      ) : (
        <>
          <Shield size={16} className="mr-2" />
          Enter Admin Mode
        </>
      )}
    </Button>
  );
};

export default ToggleAdminMode;
