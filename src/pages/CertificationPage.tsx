
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificationPath from '@/components/CertificationPath';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle2, Bookmark, Clock, Zap, BookOpen } from 'lucide-react';

const CertificationPage = () => {
  const topCertifications = [
    {
      title: "Fashion Design Fundamentals",
      description: "Master the core principles of fashion design, from sketching and pattern making to basic garment construction.",
      duration: "3 months",
      modules: 12,
      level: "Beginner"
    },
    {
      title: "Digital Pattern Making",
      description: "Learn industry-standard digital tools for creating and modifying patterns for garment manufacturing.",
      duration: "4 months",
      modules: 16,
      level: "Intermediate"
    },
    {
      title: "Sustainable Fashion Design",
      description: "Develop skills in eco-friendly design practices, sustainable materials selection, and ethical production.",
      duration: "3 months",
      modules: 14,
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-adorzia-lightGray to-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Industry-Recognized <span className="text-adorzia-tertiary">Certifications</span>
              </h1>
              <p className="text-xl text-adorzia-midGray mb-8">
                Validate your skills and knowledge with credentials that help you stand out in the competitive fashion industry
              </p>
              <Button className="bg-adorzia-tertiary hover:bg-adorzia-secondary text-white px-8 py-6 text-lg">
                Explore All Certifications
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-adorzia-tertiary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-adorzia-tertiary/10 rounded-full z-0"></div>
              <div className="relative z-10 bg-white p-8 rounded-xl shadow-elevated">
                <div className="flex justify-center mb-8">
                  <Award className="w-20 h-20 text-adorzia-tertiary" />
                </div>
                <h3 className="text-2xl font-serif text-center mb-4">Certification Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-adorzia-tertiary mt-1 mr-3 flex-shrink-0" />
                    <span>Professionally recognized credentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-adorzia-tertiary mt-1 mr-3 flex-shrink-0" />
                    <span>Enhanced career opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-adorzia-tertiary mt-1 mr-3 flex-shrink-0" />
                    <span>Access to exclusive industry events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-adorzia-tertiary mt-1 mr-3 flex-shrink-0" />
                    <span>Verified digital credentials to share</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Certifications */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Featured <span className="text-adorzia-tertiary">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topCertifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-subtle overflow-hidden hover:shadow-elevated transition-shadow">
                <div className="h-3 bg-adorzia-tertiary"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium">{cert.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.level === "Beginner" ? "bg-green-100 text-green-700" :
                      cert.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                  <p className="text-adorzia-midGray mb-6">{cert.description}</p>
                  <div className="flex items-center justify-between text-sm text-adorzia-midGray mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{cert.modules} modules</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-adorzia-tertiary text-adorzia-tertiary hover:bg-adorzia-tertiary hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content - CertificationPath Component */}
      <CertificationPath />
      
      {/* How to Get Certified */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            How to Get <span className="text-adorzia-tertiary">Certified</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-tertiary text-white flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Choose Your Path</h3>
                  <p className="text-adorzia-midGray">
                    Browse our certification catalog and select the program that aligns with your career goals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-tertiary text-white flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Complete Required Courses</h3>
                  <p className="text-adorzia-midGray">
                    Study and master all modules in your certification curriculum
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-tertiary text-white flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Complete Portfolio Project</h3>
                  <p className="text-adorzia-midGray">
                    Demonstrate your skills with a comprehensive final project reviewed by industry experts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-tertiary text-white flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Receive Your Certification</h3>
                  <p className="text-adorzia-midGray">
                    Once all requirements are met, receive your digital and physical certification credentials
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-adorzia-lightGray p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Bookmark className="w-6 h-6 text-adorzia-tertiary mr-3" />
                <h3 className="text-xl font-medium">Certification Support</h3>
              </div>
              <p className="text-adorzia-midGray mb-6">
                Our team is here to support you throughout your certification journey. Access personalized guidance, resource recommendations, and regular progress check-ins.
              </p>
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-5 h-5 text-adorzia-tertiary mr-2" />
                  <span className="font-medium">Success Rate</span>
                </div>
                <p className="text-sm text-adorzia-midGray mb-4">
                  92% of students who start an Adorzia certification program successfully complete it within the recommended timeframe.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-adorzia-tertiary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <Button className="w-full bg-adorzia-tertiary hover:bg-adorzia-secondary text-white">
                Schedule Certification Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CertificationPage;
