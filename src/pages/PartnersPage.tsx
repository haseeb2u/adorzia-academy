
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import { Building, Globe, Briefcase, Users, Award, Sparkles } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-adorzia-lightGray to-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Our <span className="text-adorzia-primary">Industry Partners</span>
              </h1>
              <p className="text-xl text-adorzia-midGray mb-8">
                Adorzia Academy collaborates with leading fashion industry organizations to provide our students with unparalleled opportunities
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-subtle flex items-center">
                <Building className="w-10 h-10 text-adorzia-primary mr-4 opacity-80" />
                <span className="font-medium">Education Partners</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-subtle flex items-center">
                <Globe className="w-10 h-10 text-adorzia-accent mr-4 opacity-80" />
                <span className="font-medium">Global Networks</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-subtle flex items-center">
                <Briefcase className="w-10 h-10 text-adorzia-tertiary mr-4 opacity-80" />
                <span className="font-medium">Fashion Brands</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-subtle flex items-center">
                <Sparkles className="w-10 h-10 text-green-500 mr-4 opacity-80" />
                <span className="font-medium">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content - Partners Component */}
      <Partners />
      
      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Student <span className="text-adorzia-primary">Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-adorzia-lightGray rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-adorzia-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Industry Mentorship</h3>
              <p className="text-adorzia-midGray">
                Connect with experienced professionals from our partner organizations for career guidance and advice
              </p>
            </div>
            
            <div className="p-8 border border-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-adorzia-lightGray rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-adorzia-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Internship Opportunities</h3>
              <p className="text-adorzia-midGray">
                Gain access to exclusive internship positions at partner fashion brands and design studios
              </p>
            </div>
            
            <div className="p-8 border border-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-adorzia-lightGray rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-adorzia-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Industry Recognition</h3>
              <p className="text-adorzia-midGray">
                Earn certifications and credentials that are recognized and valued by our industry partners
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-adorzia-lightGray">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Partner <span className="text-adorzia-primary">Testimonials</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-subtle">
              <p className="text-lg italic text-adorzia-midGray mb-6">
                "Adorzia Academy graduates consistently demonstrate exceptional technical skills and creative thinking. We're proud to collaborate with an institution that produces such well-prepared design professionals."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-adorzia-primary/20 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-adorzia-midGray">Head of Design, Fashion Institute of Design</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-subtle">
              <p className="text-lg italic text-adorzia-midGray mb-6">
                "Our partnership with Adorzia has allowed us to connect with emerging talent early in their careers. The academy's focus on both technical skills and industry readiness produces graduates who can immediately contribute to our teams."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-adorzia-primary/20 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Michael Chen</div>
                  <div className="text-sm text-adorzia-midGray">Director, Global Designer Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;
