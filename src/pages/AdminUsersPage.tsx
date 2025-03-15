
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Key } from 'lucide-react';
import AdminUserManagement from '@/components/admin/AdminUserManagement';
import ToggleAdminMode from '@/components/admin/ToggleAdminMode';

const AdminUsersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto py-10">
        <Button 
          variant="outline" 
          className="mb-4"
          onClick={() => navigate('/admin')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin Dashboard
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Manage users, assign roles, and send invitations from this panel.</p>
                <AdminUserManagement />
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  Admin Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Manage your admin access and credentials.</p>
                <ToggleAdminMode />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminUsersPage;
