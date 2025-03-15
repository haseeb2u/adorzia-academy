import React, { useEffect, useState } from 'react';
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
import ContentManager from '@/components/admin/ContentManager';
import useIsAdmin from '@/hooks/useIsAdmin';

const Index = () => {
  // Check if user is admin
  const isAdmin = useIsAdmin();
  
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

  // State for featured courses that can be managed by admins
  const [featuredCourses, setFeaturedCourses] = useState([
    {
      id: '1',
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
      id: '2',
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
      id: '3',
      title: "Adorzia Certified Fashion Entrepreneur (ACFE)",
      description: "Build and scale your own fashion brand! Learn branding, business models, marketing, funding, and manufacturing.",
      image: "https://images.unsplash.com/photo-1613022332935-61a3c9d64d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "12 weeks",
      students: 1450,
      rating: 4.9,
      category: "Certification"
    },
    {
      id: '4',
      title: "Adorzia Certified Pattern Maker (ACPM)",
      description: "Master pattern making and garment construction! Includes manual & digital pattern drafting, draping techniques, and sizing adjustments.",
      image: "https://images.unsplash.com/photo-1480881683242-4534b92efb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "15 weeks",
      students: 1680,
      rating: 4.8,
      category: "Certification"
    },
    {
      id: '5',
      title: "Adorzia Pro: Advanced Fashion Illustration",
      description: "Take your fashion sketching skills to the next level! Master digital fashion illustration, hand-drawn techniques, and fabric rendering.",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "10 weeks",
      students: 2120,
      rating: 4.9,
      category: "Masterclass"
    },
    {
      id: '6',
      title: "Adorzia Masterclass: Sustainable Fashion & Ethical Design",
      description: "Design fashion with a purpose! Learn sustainability in fashion, ethical sourcing, zero-waste design, and eco-friendly production.",
      image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "8 weeks",
      students: 1950,
      rating: 4.7,
      category: "Masterclass"
    }
  ]);

  // State for additional courses that can be managed by admins
  const [additionalCourses, setAdditionalCourses] = useState([
    {
      id: '7',
      title: "Adorzia 3D Fashion Design & Digital Clothing",
      description: "Learn to create 3D fashion designs and digital clothing for virtual environments and e-commerce.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "12 weeks",
      students: 1250,
      rating: 4.6,
      category: "Digital"
    },
    {
      id: '8',
      title: "Adorzia Pro: Fashion Tech & AI in Design",
      description: "Explore the intersection of fashion and technology, including AI-driven design tools and digital manufacturing techniques.",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      level: "Professional",
      duration: "10 weeks",
      students: 980,
      rating: 4.9,
      category: "Technology"
    }
  ]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LearningPath />
      
      {/* Featured Courses Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center mb-6">
            <div className="text-center max-w-3xl">
              <div className="badge reveal">Expert-Led Courses</div>
              <h2 className="font-serif mt-4 mb-2 reveal reveal-delay-1">
                Featured <span className="text-adorzia-accent">Certifications</span>
              </h2>
              <p className="text-adorzia-midGray reveal reveal-delay-2">
                Explore our professional certification programs designed to help you master key skills in fashion design.
              </p>
            </div>
            
            {isAdmin && (
              <ContentManager 
                contentItems={featuredCourses} 
                onUpdate={setFeaturedCourses} 
                title="Featured Certifications"
                description="Edit certification courses displayed on the home page"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Always show exactly 3 featured courses */}
            {featuredCourses.slice(0, 3).map((course, index) => (
              <div key={course.id} className={`reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          {/* Additional Adorzia Courses Section - Enhanced Layout */}
          <div className="mt-20 reveal">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-serif text-2xl">
                Explore More <span className="text-adorzia-accent">Adorzia Programs</span>
              </h3>
              
              {isAdmin && (
                <ContentManager 
                  contentItems={additionalCourses} 
                  onUpdate={setAdditionalCourses} 
                  title="Additional Courses"
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalCourses.map((course, index) => (
                <div 
                  key={course.id}
                  className={`glass-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 reveal ${index % 2 === 1 ? 'reveal-delay-1' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="sm:w-1/3 h-32 sm:h-auto overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="sm:w-2/3 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-lg">{course.title}</h4>
                          <Badge className="bg-adorzia-accent text-white">New</Badge>
                        </div>
                        <p className="text-adorzia-midGray text-sm mb-3 line-clamp-2">{course.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm text-adorzia-midGray">{course.duration} • {course.level}</div>
                        <Button variant="ghost" size="sm" className="text-adorzia-accent hover:text-adorzia-accentHover">
                          Learn More
                        </Button>
                      </div>
                    </div>
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
