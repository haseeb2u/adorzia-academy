
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ShieldOff, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/components/auth/ProtectedRoute';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const ToggleAdminMode = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const { user, updateAdminCredentials } = useAuth();
  
  useEffect(() => {
    // Check if user is admin from auth context
    const isAdminUser = user.role === 'admin';
    
    // Also check legacy admin mode
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    
    setIsAdmin(isAdminUser || storedIsAdmin);
  }, [user]);
  
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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user.email || "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleUpdateCredentials = (data: FormValues) => {
    // Update admin credentials
    const success = updateAdminCredentials(data.email, data.password);
    
    if (success) {
      toast({
        title: "Admin credentials updated",
        description: "Your admin credentials have been updated successfully.",
      });
      setDialogOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: "Failed to update admin credentials. You must be logged in as admin.",
      });
    }
  };
  
  // Only render password change dialog for admins
  if (!isAdmin) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={toggleAdminMode}
      >
        <Shield size={16} />
        Enable Content Management
      </Button>
    );
  }
  
  return (
    <div className="space-y-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={toggleAdminMode}
      >
        <ShieldOff size={16} />
        Disable Content Management
      </Button>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 w-full"
          >
            <Key size={16} />
            Change Admin Credentials
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Admin Credentials</DialogTitle>
            <DialogDescription>
              Change your admin email and password.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleUpdateCredentials)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Update Credentials</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ToggleAdminMode;
