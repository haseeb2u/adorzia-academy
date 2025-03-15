
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  category: string;
  progress: number;
  image: string;
}

const MyCourses = () => {
  const navigate = useNavigate();
  
  const courses: Course[] = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      category: 'Programming',
      progress: 68,
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'User Experience Design Essentials',
      category: 'Design',
      progress: 45,
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Business Analytics for Beginners',
      category: 'Business',
      progress: 100,
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategies',
      category: 'Marketing',
      progress: 92,
      image: '/placeholder.svg',
    }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">My Courses</CardTitle>
        <Button 
          variant="ghost" 
          onClick={() => navigate('/my-courses')}
          className="text-adorzia-primary hover:text-adorzia-secondary"
        >
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {courses.map((course) => (
            <div key={course.id} className="flex items-start space-x-4">
              <div className="w-16 h-16 min-w-16 rounded-md overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-base truncate">{course.title}</h3>
                <p className="text-adorzia-midGray text-xs mt-1">{course.category}</p>
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{course.progress}% completed</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5" />
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-adorzia-primary hover:text-adorzia-secondary ml-2"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                Continue
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCourses;
