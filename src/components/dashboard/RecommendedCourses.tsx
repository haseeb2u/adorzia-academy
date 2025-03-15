
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

interface RecommendedCourse {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  image: string;
}

const RecommendedCourses = () => {
  const navigate = useNavigate();
  
  const courses: RecommendedCourse[] = [
    {
      id: 101,
      title: 'Advanced React Techniques',
      instructor: 'Jane Cooper',
      rating: 4.8,
      image: '/placeholder.svg',
    },
    {
      id: 102,
      title: 'Data Science with Python',
      instructor: 'David Miller',
      rating: 4.7,
      image: '/placeholder.svg',
    },
    {
      id: 103,
      title: 'Mobile App Development',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      image: '/placeholder.svg',
    }
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Recommended For You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
              <div className="rounded-md overflow-hidden mb-2">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-base line-clamp-2 group-hover:text-adorzia-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-adorzia-midGray text-xs mt-1">By {course.instructor}</p>
              <div className="flex items-center mt-2">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm ml-1">{course.rating}</span>
              </div>
            </div>
          ))}
          
          <Button 
            className="w-full mt-2 bg-adorzia-primary hover:bg-adorzia-secondary text-white"
            onClick={() => navigate('/courses')}
          >
            Explore More Courses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedCourses;
