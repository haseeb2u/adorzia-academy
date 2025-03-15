
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/components/auth/ProtectedRoute';
import AdminCourseList from '@/components/admin/AdminCourseList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Graduation, Users, Award, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-adorzia-lightGray">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Adorzia Academy Admin</h1>
              <p className="text-adorzia-lightGray mt-2">Manage courses, students, and certifications</p>
            </div>
            <Button 
              onClick={() => navigate('/admin/courses/new')}
              className="bg-adorzia-tertiary hover:bg-adorzia-secondary text-white"
            >
              Create New Course
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 my-8">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="mb-8 bg-white p-1 flex flex-wrap">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Course Management</h2>
              <AdminCourseList />
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Student Management</h2>
              <p className="text-adorzia-midGray">Manage student enrollments, progress, and performance.</p>
              {/* Student management components would go here */}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Certification Management</h2>
              <p className="text-adorzia-midGray">Issue and revoke certifications for completed courses.</p>
              {/* Certification management components would go here */}
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Academy Settings</h2>
              <p className="text-adorzia-midGray">Configure academy-wide settings and appearance.</p>
              {/* Settings components would go here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
