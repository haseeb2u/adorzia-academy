
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearningPath from '@/components/LearningPath';
import StyleBox from '@/components/StyleBox';
import Partners from '@/components/Partners';
import CertificationPath from '@/components/CertificationPath';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Footer from '@/components/Footer';
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LearningPath />
      <StyleBox />
      <Partners />
      <CertificationPath />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Index;
