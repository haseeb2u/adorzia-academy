
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Award, Clock, Calendar } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Courses Enrolled',
      value: '4',
      icon: BookOpen,
      color: 'bg-adorzia-primary/10 text-adorzia-primary',
    },
    {
      title: 'Completed',
      value: '2',
      icon: Award,
      color: 'bg-adorzia-tertiary/10 text-adorzia-tertiary',
    },
    {
      title: 'Hours Learned',
      value: '36',
      icon: Clock,
      color: 'bg-adorzia-secondary/10 text-adorzia-secondary',
    },
    {
      title: 'Learning Streak',
      value: '12 days',
      icon: Calendar,
      color: 'bg-adorzia-dark/10 text-adorzia-dark',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center">
            <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-adorzia-midGray text-sm">{stat.title}</p>
              <h4 className="text-2xl font-bold text-adorzia-darkGray">{stat.value}</h4>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
