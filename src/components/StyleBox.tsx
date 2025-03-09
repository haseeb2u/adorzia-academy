
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Puzzle, Award, TrendingUp } from 'lucide-react';

const StyleBox = () => {
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

  const styleBoxes = [
    {
      title: "Seasonal Collection",
      description: "Design a mini 3-piece collection for the upcoming season focusing on sustainable fabrics.",
      difficulty: "Medium",
      category: "Fashion Design",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      points: 250,
    },
    {
      title: "Print Development",
      description: "Create a unique textile print inspired by architectural elements for home decor.",
      difficulty: "Hard",
      category: "Textile Design",
      image: "https://images.unsplash.com/photo-1594280405215-b7f90625e37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      points: 350,
    },
    {
      title: "Trend Adaptation",
      description: "Reinterpret a historical fashion trend for the modern consumer market.",
      difficulty: "Easy",
      category: "Trend",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      points: 150,
    },
  ];

  const difficultyColors = {
    Easy: "bg-green-50 text-green-600",
    Medium: "bg-amber-50 text-amber-600",
    Hard: "bg-rose-50 text-rose-600"
  };

  const categoryIcons = {
    "Fashion Design": <Puzzle className="w-4 h-4" />,
    "Textile Design": <Award className="w-4 h-4" />,
    "Trend": <TrendingUp className="w-4 h-4" />
  };

  return (
    <section id="stylebox" ref={sectionRef} className="py-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge reveal">Hands-on Learning</div>
            <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
              Master Design with <span className="text-adorzia-accent">StyleBox Challenges</span>
            </h2>
            <p className="text-adorzia-midGray mb-8 reveal reveal-delay-2">
              Apply what you've learned by solving real-world design challenges. StyleBox assignments are categorized by difficulty and design focus, allowing you to practice specific skills and build your portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 reveal reveal-delay-3">
              <div className="flex-1 p-6 bg-adorzia-lightGray rounded-lg">
                <div className="flex items-center mb-3">
                  <Puzzle className="w-5 h-5 text-adorzia-accent mr-2" />
                  <h4 className="text-lg font-medium">Difficulty-Based</h4>
                </div>
                <p className="text-sm text-adorzia-midGray">Easy, medium, and hard challenges for every skill level.</p>
              </div>
              
              <div className="flex-1 p-6 bg-adorzia-lightGray rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-adorzia-accent mr-2" />
                  <h4 className="text-lg font-medium">Category-Focused</h4>
                </div>
                <p className="text-sm text-adorzia-midGray">Fashion, textile, or trend-based challenges for specialized learning.</p>
              </div>
            </div>
            
            <Button className="mt-8 bg-adorzia-accent hover:bg-adorzia-accentHover text-white reveal reveal-delay-4">
              Explore All Challenges
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {styleBoxes.map((box, index) => (
              <div key={box.title} className={`card p-5 flex reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}>
                <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                  <img src={box.image} alt={box.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                
                <div className="ml-5 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={difficultyColors[box.difficulty as keyof typeof difficultyColors]}>
                      {box.difficulty}
                    </Badge>
                    <div className="flex items-center text-adorzia-accent">
                      <span className="text-sm font-medium">{box.points} XP</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium mb-1">{box.title}</h3>
                  <p className="text-sm text-adorzia-midGray mb-2">{box.description}</p>
                  
                  <div className="flex items-center text-xs text-adorzia-midGray">
                    {categoryIcons[box.category as keyof typeof categoryIcons]}
                    <span className="ml-1">{box.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleBox;
