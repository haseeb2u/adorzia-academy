
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import AdminUserManagement from '@/components/admin/AdminUserManagement';

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

        <Card className="mb-5">
          <CardHeader>
            <CardTitle className="text-2xl">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Manage users, assign roles, and send invitations from this panel.</p>
            <AdminUserManagement />
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminUsersPage;
