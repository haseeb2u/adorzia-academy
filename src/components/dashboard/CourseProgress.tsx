
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseProgress = () => {
  const navigate = useNavigate();
  
  const currentCourse = {
    id: 1,
    title: 'Fashion Design Fundamentals',
    progress: 68,
    currentLesson: 'Introduction to Fashion Design Theory',
    timeLeft: '22 minutes left',
    image: '/placeholder.svg',
  };

  const handleResumeLearning = () => {
    navigate('/courses/demo');
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Continue Learning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start">
          <div className="w-full sm:w-32 h-20 sm:h-20 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
            <img 
              src={currentCourse.image} 
              alt={currentCourse.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg">{currentCourse.title}</h3>
            <p className="text-adorzia-midGray text-sm my-2">{currentCourse.currentLesson}</p>
            
            <div className="mt-3 mb-2">
              <div className="flex justify-between mb-1 text-sm">
                <span>{currentCourse.progress}% completed</span>
                <span>{currentCourse.timeLeft}</span>
              </div>
              <Progress 
                value={currentCourse.progress} 
                className="h-2"
                // Fix: Remove inline styles and use Tailwind classes
                // The Progress component doesn't accept indicatorStyle prop
              />
            </div>
            
            <div className="mt-4">
              <Button 
                className="bg-adorzia-tertiary hover:bg-adorzia-secondary text-white"
                onClick={handleResumeLearning}
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Resume Learning
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgress;
