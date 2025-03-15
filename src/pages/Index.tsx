
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearningPath from '@/components/LearningPath';
import StyleBox from '@/components/StyleBox';
import Partners from '@/components/Partners';
import CertificationPath from '@/components/CertificationPath';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Footer from '@/components/Footer';

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LearningPath />
      <section className="py-12 bg-gradient-to-r from-adorzia-lightGray to-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Explore Our <span className="text-adorzia-accent">Fashion Education</span> Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="/stylebox" className="group">
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-adorzia-accent/10 flex items-center justify-center">
                  <div className="text-adorzia-accent text-5xl font-serif">StyleBox</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2 group-hover:text-adorzia-accent transition-colors">Practical Challenges</h3>
                  <p className="text-adorzia-midGray text-sm">Apply your skills with real-world design challenges</p>
                </div>
              </div>
            </a>
            <a href="/partners" className="group">
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-adorzia-primary/10 flex items-center justify-center">
                  <div className="text-adorzia-primary text-5xl font-serif">Partners</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2 group-hover:text-adorzia-primary transition-colors">Industry Connections</h3>
                  <p className="text-adorzia-midGray text-sm">Learn about our prestigious industry partners</p>
                </div>
              </div>
            </a>
            <a href="/certification" className="group">
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-adorzia-tertiary/10 flex items-center justify-center">
                  <div className="text-adorzia-tertiary text-5xl font-serif">Certificates</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2 group-hover:text-adorzia-tertiary transition-colors">Get Certified</h3>
                  <p className="text-adorzia-midGray text-sm">Earn industry-recognized credentials</p>
                </div>
              </div>
            </a>
            <a href="/pricing" className="group">
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-40 bg-purple-100 flex items-center justify-center">
                  <div className="text-purple-600 text-5xl font-serif">Pricing</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2 group-hover:text-purple-600 transition-colors">Subscription Plans</h3>
                  <p className="text-adorzia-midGray text-sm">Find the perfect plan for your learning journey</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
