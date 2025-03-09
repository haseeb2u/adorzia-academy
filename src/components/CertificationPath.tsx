
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Trophy, PenTool, FileCheck, BookOpen } from 'lucide-react';

const CertificationPath = () => {
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

  const certificationSteps = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Complete Courses",
      description: "Master the required curriculum for your chosen certification path."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Practice with StyleBox",
      description: "Apply your knowledge through guided challenges that build your skills."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Submit Final Project",
      description: "Demonstrate your expertise with a comprehensive design project."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Receive Certification",
      description: "Earn your industry-recognized certification and showcase your skills."
    }
  ];

  const certifications = [
    "Fashion Design Fundamentals",
    "Digital Pattern Making",
    "Sustainable Fashion Design",
    "Fashion Collection Development",
    "Textile Design & Innovation",
    "Fashion Tech Integration"
  ];

  return (
    <section id="certification" ref={sectionRef} className="py-24 bg-adorzia-lightGray">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge reveal">Professional Growth</div>
          <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
            Earn Industry-Recognized <span className="text-adorzia-accent">Certifications</span>
          </h2>
          <p className="text-adorzia-midGray reveal reveal-delay-2">
            Our certification program validates your skills and knowledge, helping you stand out in the competitive fashion industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-adorzia-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-12 shadow-subtle reveal">
                <Trophy className="w-16 h-16 text-adorzia-accent" />
              </div>
              
              <div className="space-y-8">
                {certificationSteps.map((step, index) => (
                  <div 
                    key={step.title} 
                    className={`flex items-start reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : index === 3 ? 'reveal-delay-3' : ''}`}
                  >
                    <div className="p-3 bg-white rounded-full mr-4 shadow-subtle">
                      <div className="text-adorzia-accent">{step.icon}</div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-adorzia-midGray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-10 reveal reveal-delay-2">
            <h3 className="text-2xl font-medium mb-6">Available Certifications</h3>
            
            <div className="space-y-4 mb-8">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-adorzia-accent mr-3" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-adorzia-accent/10 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Award className="w-6 h-6 text-adorzia-accent mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-2">Certification Benefits</h4>
                  <p className="text-sm text-adorzia-midGray">
                    Certified designers gain credibility, higher ranking on Adorzia, and access to exclusive job opportunities and brand collaborations.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
              View Certification Requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPath;
