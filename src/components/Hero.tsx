
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GraduationCap, Palette, Award } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 overflow-hidden flex items-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,1)), url('https://images.unsplash.com/photo-1605289355680-75fb42996767?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-adorzia-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-adorzia-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="badge reveal">Fashion Design Education</div>
            <h1 className="font-serif font-bold leading-tight reveal">
              Structured Learning for <span className="text-adorzia-accent">Fashion Designers</span>
            </h1>
            <p className="text-xl text-adorzia-midGray mt-6 reveal reveal-delay-1">
              Progress from beginner to expert with guided courses, certifications, and hands-on StyleBox challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 reveal reveal-delay-2">
              <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white px-8 py-6 text-lg">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-adorzia-accent text-adorzia-accent hover:bg-adorzia-accent/5 px-8 py-6 text-lg">
                Take a Tour
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 reveal reveal-delay-3">
              <div className="text-center">
                <div className="font-bold text-2xl">50+</div>
                <div className="text-adorzia-midGray text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">10k+</div>
                <div className="text-adorzia-midGray text-sm">Designers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">25+</div>
                <div className="text-adorzia-midGray text-sm">Certifications</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px]">
            <div className="glass-panel p-8 absolute top-0 right-0 w-full max-w-md reveal reveal-delay-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-adorzia-lightGray rounded-full">
                  <GraduationCap className="w-6 h-6 text-adorzia-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Structured Learning</h3>
                  <p className="text-adorzia-midGray">From basics to professional skills</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 absolute top-1/3 left-0 w-full max-w-md reveal reveal-delay-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-adorzia-lightGray rounded-full">
                  <Palette className="w-6 h-6 text-adorzia-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">StyleBox Challenges</h3>
                  <p className="text-adorzia-midGray">Hands-on design practice</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 absolute bottom-0 right-0 w-full max-w-md reveal reveal-delay-3">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-adorzia-lightGray rounded-full">
                  <Award className="w-6 h-6 text-adorzia-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Industry Certifications</h3>
                  <p className="text-adorzia-midGray">Gain professional credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
