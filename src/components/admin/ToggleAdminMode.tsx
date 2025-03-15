
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ShieldOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ToggleAdminMode = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(storedIsAdmin);
  }, []);
  
  const toggleAdminMode = () => {
    const newValue = !isAdmin;
    localStorage.setItem('isAdmin', newValue.toString());
    setIsAdmin(newValue);
    
    // Show toast notification
    toast({
      title: newValue ? "Admin mode enabled" : "Admin mode disabled",
      description: newValue ? "You can now manage content on the site" : "Content management has been disabled",
    });
    
    // Reload to apply changes
    window.location.reload();
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2"
      onClick={toggleAdminMode}
    >
      {isAdmin ? (
        <>
          <ShieldOff size={16} />
          Disable Content Management
        </>
      ) : (
        <>
          <Shield size={16} />
          Enable Content Management
        </>
      )}
    </Button>
  );
};

export default ToggleAdminMode;
