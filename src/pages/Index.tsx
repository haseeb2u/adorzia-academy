
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearningPath from '@/components/LearningPath';
import StyleBox from '@/components/StyleBox';
import CertificationPath from '@/components/CertificationPath';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  // Helper function to implement intersection observer for animations
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Updated featured courses to showcase Adorzia's industrial courses
  const featuredCourses = [
    {
      title: "Adorzia Certified Fashion Designer (ACFD)",
      description: "Become a certified fashion designer with Adorzia! Master sketching, fabric selection, garment construction, and trend forecasting.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "16 weeks",
      students: 3250,
      rating: 4.8,
      category: "Certification"
    },
    {
      title: "Adorzia Certified Textile Innovator (ACTI)",
      description: "Master textile development, from fibers to futuristic smart fabrics! Includes StyleBox Fabric Experiments & Eco-Friendly Design Challenges.",
      image: "https://images.unsplash.com/photo-1606913419695-0334c30bdeda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "14 weeks",
      students: 1870,
      rating: 4.7,
      category: "Certification"
    },
    {
      title: "Adorzia Certified Fashion Entrepreneur (ACFE)",
      description: "Build and scale your own fashion brand! Learn branding, business models, marketing, funding, and manufacturing.",
      image: "https://images.unsplash.com/photo-1613022332935-61a3c9d64d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "12 weeks",
      students: 1450,
      rating: 4.9,
      category: "Certification"
    }
  ];

  // Additional Adorzia branded courses to showcase in a separate section
  const additionalCourses = [
    "Adorzia Pro: Advanced Fashion Illustration",
    "Adorzia Masterclass: Sustainable Fashion & Ethical Design",
    "Adorzia 3D Fashion Design & Digital Clothing",
    "Adorzia Certified Pattern Maker (ACPM)",
    "Adorzia Pro: Fashion Tech & AI in Design"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LearningPath />
      
      {/* Featured Courses Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge reveal">Expert-Led Courses</div>
            <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
              Featured <span className="text-adorzia-accent">Certifications</span>
            </h2>
            <p className="text-adorzia-midGray reveal reveal-delay-2">
              Explore our professional certification programs designed to help you master key skills in fashion design, from fundamentals to expert techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={course.title} className={`reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          {/* Additional Adorzia Courses Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto reveal">
            <h3 className="font-serif text-2xl mb-8">
              Explore More <span className="text-adorzia-accent">Adorzia Programs</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalCourses.map((course, index) => (
                <div 
                  key={index}
                  className={`p-4 border border-adorzia-accent/20 rounded-lg bg-adorzia-accent/5 hover:bg-adorzia-accent/10 transition-colors reveal ${index % 2 === 1 ? 'reveal-delay-1' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{course}</span>
                    <Badge className="bg-adorzia-accent text-white">New</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center reveal reveal-delay-3">
            <Link to="/courses">
              <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
                View All Adorzia Certifications
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <StyleBox />
      <CertificationPath />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Index;
