
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  level,
  duration,
  students,
  rating,
  category,
}) => {
  return (
    <div className="card group h-full flex flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Badge className="absolute top-4 left-4 bg-adorzia-accent text-white">
          {category}
        </Badge>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-adorzia-midGray mb-2">
          <div className="flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1 inline-block" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center mr-4">
            <Users className="w-4 h-4 mr-1 inline-block" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 inline-block text-yellow-500 fill-yellow-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className={`mb-3 text-xs font-medium px-2 py-1 rounded inline-block w-fit
          ${level === 'Beginner' ? 'bg-blue-50 text-blue-600' : 
          level === 'Intermediate' ? 'bg-purple-50 text-purple-600' : 
          'bg-amber-50 text-amber-600'}`}>
          {level}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-adorzia-midGray mb-6 text-sm flex-grow">{description}</p>
        
        <Button 
          className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white w-full mt-auto"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
