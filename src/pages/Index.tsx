
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearningPath from '@/components/LearningPath';
import StyleBox from '@/components/StyleBox';
import CertificationPath from '@/components/CertificationPath';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';

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

  // Sample course data for the featured courses section
  const featuredCourses = [
    {
      title: "Fashion Design Fundamentals",
      description: "Learn the essential principles and techniques of fashion design in this comprehensive beginner course.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Beginner",
      duration: "10 weeks",
      students: 3250,
      rating: 4.8,
      category: "Design"
    },
    {
      title: "Digital Textile Design",
      description: "Master the art of creating unique fabric patterns and prints using professional digital tools.",
      image: "https://images.unsplash.com/photo-1606913419695-0334c30bdeda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Intermediate",
      duration: "8 weeks",
      students: 1870,
      rating: 4.7,
      category: "Textile"
    },
    {
      title: "Advanced Pattern Making",
      description: "Take your pattern making skills to the professional level with advanced techniques and methodology.",
      image: "https://images.unsplash.com/photo-1613022332935-61a3c9d64d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Expert",
      duration: "12 weeks",
      students: 950,
      rating: 4.9,
      category: "Technical"
    }
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
              Featured <span className="text-adorzia-accent">Courses</span>
            </h2>
            <p className="text-adorzia-midGray reveal reveal-delay-2">
              Explore our most popular courses designed to help you master key skills in fashion design, from fundamentals to expert techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={course.title} className={`reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}>
                <CourseCard {...course} />
              </div>
            ))}
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
