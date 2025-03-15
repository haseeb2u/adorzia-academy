import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, Book, Award, Plus, 
  GraduationCap, Settings, 
  BarChart, MessageSquare 
} from 'lucide-react';
import AdminCourseList from '@/components/admin/AdminCourseList';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto py-10">
        <Card className="mb-5">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            Welcome to the Adorzia Academy admin dashboard. Manage courses, users, and settings here.
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Total Students
              </CardTitle>
              <Settings className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,457</div>
              <p className="text-sm text-gray-500">
                +72 since last week
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Book className="mr-2 h-4 w-4" />
                Total Courses
              </CardTitle>
              <Settings className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-gray-500">
                +3 since last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Award className="mr-2 h-4 w-4" />
                Certifications Issued
              </CardTitle>
              <Settings className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,356</div>
              <p className="text-sm text-gray-500">
                +125 since last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-5">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Courses</CardTitle>
            <Button onClick={() => navigate('/admin/courses/new')}>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </CardHeader>
          <CardContent>
            <AdminCourseList />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>New user signed up</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>2 minutes ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Course "Fashion Design" created</TableCell>
                  <TableCell>admin@adorzia.com</TableCell>
                  <TableCell>1 hour ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>User enrolled in "Textile Design"</TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>3 hours ago</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
