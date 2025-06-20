
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MyCourses from '@/components/dashboard/MyCourses';
import CourseProgress from '@/components/dashboard/CourseProgress';
import RecommendedCourses from '@/components/dashboard/RecommendedCourses';
import DashboardStats from '@/components/dashboard/DashboardStats';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-adorzia-lightGray">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Adorzia Academy Dashboard</h1>
              <p className="text-adorzia-lightGray mt-2">Track your learning progress and manage your fashion design courses</p>
            </div>
            <Button 
              onClick={() => navigate('/courses')}
              className="bg-adorzia-tertiary hover:bg-adorzia-secondary text-white"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 mt-8 pb-12">
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <CourseProgress />
            <MyCourses />
          </div>
          <div className="lg:col-span-1">
            <RecommendedCourses />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
