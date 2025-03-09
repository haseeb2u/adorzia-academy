
import React, { useEffect, useRef } from 'react';
import { Book, Pencil, Lightbulb, TrendingUp, Palette, PenTool, Layers, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LevelProps {
  title: string;
  description: string;
  skills: { icon: React.ReactNode; text: string }[];
  color: string;
  index: number;
}

const Level: React.FC<LevelProps> = ({ title, description, skills, color, index }) => {
  return (
    <div className={cn(
      'card p-8 reveal',
      index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''
    )}>
      <div className={cn(
        'w-fit rounded-full px-3 py-1 text-sm font-medium mb-4',
        color
      )}>
        {title}
      </div>
      <p className="text-adorzia-midGray mb-6">{description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="text-adorzia-accent">{skill.icon}</div>
            <span className="text-sm">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LearningPath = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.reveal');
          
          if (entry.isIntersecting) {
            elements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const levels = [
    {
      title: "Beginner Level",
      description: "Master the foundations of fashion design with essential courses on basic techniques and principles.",
      color: "bg-blue-50 text-blue-600",
      skills: [
        { icon: <Book className="w-4 h-4" />, text: "Fashion Basics" },
        { icon: <Palette className="w-4 h-4" />, text: "Color Theory" },
        { icon: <Pencil className="w-4 h-4" />, text: "Sketching" },
        { icon: <Lightbulb className="w-4 h-4" />, text: "Textile Selection" },
      ]
    },
    {
      title: "Intermediate Level",
      description: "Advance your skills with specialized techniques and develop your unique design approach.",
      color: "bg-purple-50 text-purple-600",
      skills: [
        { icon: <PenTool className="w-4 h-4" />, text: "Advanced Techniques" },
        { icon: <Layers className="w-4 h-4" />, text: "Garment Construction" },
        { icon: <Palette className="w-4 h-4" />, text: "Digital Design Tools" },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Trend Forecasting" },
      ]
    },
    {
      title: "Expert Level",
      description: "Prepare for industry success with professional portfolio development and business strategies.",
      color: "bg-amber-50 text-amber-600",
      skills: [
        { icon: <BarChart className="w-4 h-4" />, text: "Market Strategies" },
        { icon: <Lightbulb className="w-4 h-4" />, text: "Business of Fashion" },
        { icon: <Layers className="w-4 h-4" />, text: "Portfolio Building" },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Industry Networking" },
      ]
    }
  ];

  return (
    <section id="courses" ref={sectionRef} className="py-24 bg-adorzia-gray">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge reveal">Learning Structure</div>
          <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
            A Progressive <span className="text-adorzia-accent">Learning Journey</span>
          </h2>
          <p className="text-adorzia-midGray reveal reveal-delay-2">
            Our curriculum is carefully structured to guide you from foundational skills to advanced techniques, ensuring a comprehensive education in fashion design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Level
              key={level.title}
              title={level.title}
              description={level.description}
              skills={level.skills}
              color={level.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
