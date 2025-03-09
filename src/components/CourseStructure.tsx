
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Puzzle, Lightbulb, GraduationCap, Lock, Trophy } from 'lucide-react';

export interface Module {
  title: string;
  theory: string;
  practice: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface CourseProps {
  title: string;
  level: string;
  emoji: string;
  objective: string;
  access: {
    type: 'Registered' | 'Paid' | 'Exclusive';
    description: string;
  };
  modules: Module[];
  certification?: boolean;
}

const CourseStructure: React.FC<CourseProps> = ({
  title,
  level,
  emoji,
  objective,
  access,
  modules,
  certification = false,
}) => {
  const levelColors = {
    'Beginner Level': 'bg-blue-50 text-blue-600',
    'Intermediate Level': 'bg-purple-50 text-purple-600',
    'Expert Level': 'bg-amber-50 text-amber-600',
  };
  
  const accessColors = {
    'Registered': 'bg-green-50 text-green-600',
    'Paid': 'bg-amber-50 text-amber-600',
    'Exclusive': 'bg-rose-50 text-rose-600',
  };
  
  const difficultyColors = {
    'Easy': 'bg-green-50 text-green-600',
    'Medium': 'bg-amber-50 text-amber-600',
    'Hard': 'bg-rose-50 text-rose-600',
  };

  return (
    <div className="card p-8 mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">{emoji}</span>
            <Badge className={levelColors[level as keyof typeof levelColors]}>
              {level}
            </Badge>
          </div>
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Badge className={accessColors[access.type]}>
            {access.type === 'Registered' ? (
              <GraduationCap className="w-3 h-3 mr-1" />
            ) : access.type === 'Paid' ? (
              <Lock className="w-3 h-3 mr-1" />
            ) : (
              <Trophy className="w-3 h-3 mr-1" />
            )}
            {access.description}
          </Badge>
        </div>
      </div>
      
      <p className="text-adorzia-midGray mb-8">
        <span className="font-medium text-black">Objective:</span> {objective}
      </p>
      
      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4 flex items-center">
          <Book className="w-5 h-5 mr-2 text-adorzia-accent" />
          Course Structure
        </h4>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div 
              key={module.title} 
              className="border-l-4 border-adorzia-accent pl-6 py-2"
            >
              <h5 className="text-lg font-medium mb-3">📖 Module {index + 1}: {module.title}</h5>
              
              <div className="mb-3">
                <div className="flex items-start mb-1">
                  <Lightbulb className="w-4 h-4 mr-2 text-adorzia-accent mt-1" />
                  <span className="font-medium">Theory:</span>
                </div>
                <p className="text-adorzia-midGray ml-6">{module.theory}</p>
              </div>
              
              <div>
                <div className="flex items-start mb-1">
                  <Puzzle className="w-4 h-4 mr-2 text-adorzia-accent mt-1" />
                  <span className="font-medium">StyleBox Practice:</span>
                </div>
                <div className="flex items-start ml-6">
                  <p className="text-adorzia-midGray">{module.practice}</p>
                  {module.difficulty && (
                    <Badge className={`ml-2 ${difficultyColors[module.difficulty]}`}>
                      {module.difficulty}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {certification && (
        <div className="bg-adorzia-accent/10 p-6 rounded-lg mb-6 flex items-start">
          <Trophy className="w-6 h-6 text-adorzia-accent mr-3 mt-1" />
          <div>
            <h4 className="text-lg font-medium mb-1">Course Certification</h4>
            <p className="text-adorzia-midGray">
              Upon completion of all modules and the final StyleBox challenge, you'll receive an official Adorzia Academy certification that you can share on your portfolio and professional profiles.
            </p>
          </div>
        </div>
      )}
      
      <Button className="w-full bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
        {access.type === 'Registered' ? 'Enroll Now' : access.type === 'Paid' ? 'Subscribe to Access' : 'Join VIP Program'}
      </Button>
    </div>
  );
};

export default CourseStructure;
