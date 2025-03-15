
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Search, BookOpen, CheckCircle, Award, Clock } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  progress: number;
  status: 'in-progress' | 'completed' | 'not-started';
  instructor: string;
  lastAccessed?: string;
  image: string;
  duration: string;
}

const MyCourses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      description: 'Learn the core technologies used in modern web development.',
      category: 'Programming',
      level: 'Beginner',
      progress: 68,
      status: 'in-progress',
      instructor: 'John Doe',
      lastAccessed: '2 days ago',
      image: '/placeholder.svg',
      duration: '15 hours',
    },
    {
      id: 2,
      title: 'User Experience Design Essentials',
      description: 'Master the principles of creating intuitive user interfaces.',
      category: 'Design',
      level: 'Intermediate',
      progress: 45,
      status: 'in-progress',
      instructor: 'Jane Smith',
      lastAccessed: 'Yesterday',
      image: '/placeholder.svg',
      duration: '12 hours',
    },
    {
      id: 3,
      title: 'Business Analytics for Beginners',
      description: 'Learn how to analyze business data for better decision making.',
      category: 'Business',
      level: 'Beginner',
      progress: 100,
      status: 'completed',
      instructor: 'Robert Williams',
      lastAccessed: '1 week ago',
      image: '/placeholder.svg',
      duration: '10 hours',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategies',
      description: 'Discover effective digital marketing techniques for modern businesses.',
      category: 'Marketing',
      level: 'Intermediate',
      progress: 92,
      status: 'in-progress',
      instructor: 'Sarah Johnson',
      lastAccessed: '3 days ago',
      image: '/placeholder.svg',
      duration: '8 hours',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using modern frameworks.',
      category: 'Programming',
      level: 'Advanced',
      progress: 100,
      status: 'completed',
      instructor: 'David Clark',
      lastAccessed: '2 weeks ago',
      image: '/placeholder.svg',
      duration: '20 hours',
    }
  ];
  
  const filteredCourses = (status: string) => {
    return courses
      .filter(course => 
        (status === 'all' || course.status === status) &&
        (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'in-progress':
        return <Clock className="h-5 w-5 text-adorzia-tertiary" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-adorzia-primary" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-adorzia-lightGray pb-12">
      <div className="bg-adorzia-primary text-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Courses</h1>
              <p className="text-adorzia-lightGray mt-2">Manage and track all your enrolled courses</p>
            </div>
            <Button 
              onClick={() => navigate('/courses')}
              className="bg-adorzia-tertiary hover:bg-adorzia-secondary text-white"
            >
              Browse New Courses
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="w-full md:w-64">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-adorzia-midGray" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-adorzia-midGray text-sm">Sort by:</span>
            <select className="bg-white border border-adorzia-lightGray rounded-md px-3 py-1.5 text-sm">
              <option value="recent">Recently Accessed</option>
              <option value="progress">Progress</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Courses ({courses.length})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({filteredCourses('in-progress').length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({filteredCourses('completed').length})</TabsTrigger>
          </TabsList>
          
          {['all', 'in-progress', 'completed'].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-6">
              {filteredCourses(tab).length > 0 ? (
                filteredCourses(tab).map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 md:h-auto">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center mb-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-adorzia-lightGray text-adorzia-darkGray mr-2">
                              {course.category}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-adorzia-tertiary/10 text-adorzia-tertiary">
                              {course.level}
                            </span>
                            <div className="ml-auto flex items-center">
                              {getStatusIcon(course.status)}
                              <span className="ml-1 text-sm text-adorzia-midGray">
                                {course.status === 'in-progress' ? 'In Progress' : 
                                course.status === 'completed' ? 'Completed' : 'Not Started'}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-medium mb-2">{course.title}</h3>
                          <p className="text-adorzia-midGray text-sm mb-4">{course.description}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                              {course.status !== 'completed' && (
                                <>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm text-adorzia-midGray">{course.progress}% complete</span>
                                    <span className="text-sm text-adorzia-midGray">Last accessed: {course.lastAccessed}</span>
                                  </div>
                                  <Progress value={course.progress} className="h-2" />
                                </>
                              )}
                              {course.status === 'completed' && (
                                <div className="flex items-center">
                                  <Award className="h-5 w-5 text-adorzia-tertiary mr-2" />
                                  <span className="text-sm text-adorzia-midGray">Completed on {course.lastAccessed}</span>
                                </div>
                              )}
                            </div>
                            <Button 
                              onClick={() => navigate(`/course/${course.id}`)}
                              className={course.status === 'completed' 
                                ? "bg-adorzia-tertiary hover:bg-adorzia-secondary text-white min-w-24" 
                                : "bg-adorzia-primary hover:bg-adorzia-secondary text-white min-w-24"
                              }
                            >
                              {course.status === 'completed' ? 'Review' : 'Continue'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-adorzia-midGray">No courses found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MyCourses;
