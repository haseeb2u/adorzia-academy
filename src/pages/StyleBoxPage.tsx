
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleBox from '@/components/StyleBox';
import { Button } from '@/components/ui/button';
import { Palette, Clock, Award, Lightbulb, Zap } from 'lucide-react';

const StyleBoxPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-adorzia-lightGray to-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Master Design with <span className="text-adorzia-accent">StyleBox</span> Challenges
              </h1>
              <p className="text-xl text-adorzia-midGray mb-8">
                Put your fashion design skills to the test with our curated collection of real-world design challenges
              </p>
              <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white px-8 py-6 text-lg">
                View All Challenges
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elevated">
              <img 
                src="https://images.unsplash.com/photo-1621786030333-c549ac5853b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="StyleBox Design Challenge" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Why StyleBox <span className="text-adorzia-accent">Challenges</span> Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-adorzia-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Practical Application</h3>
              <p className="text-adorzia-midGray">
                Apply theoretical knowledge to practical design scenarios that mirror industry demands
              </p>
            </div>
            
            <div className="p-8 bg-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-adorzia-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Structured Learning</h3>
              <p className="text-adorzia-midGray">
                Time-bounded challenges that help you build discipline and workflow efficiency
              </p>
            </div>
            
            <div className="p-8 bg-adorzia-lightGray rounded-xl">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-adorzia-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4">Portfolio Building</h3>
              <p className="text-adorzia-midGray">
                Create showcase-worthy design pieces that demonstrate your unique abilities
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content - StyleBox Component */}
      <StyleBox />
      
      {/* How It Works */}
      <section className="py-16 bg-adorzia-lightGray">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            How <span className="text-adorzia-accent">StyleBox</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-accent text-white flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Choose Your Challenge</h3>
                  <p className="text-adorzia-midGray">
                    Browse challenges by difficulty level, category, or time commitment to find one that matches your interests
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-accent text-white flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Complete the Design</h3>
                  <p className="text-adorzia-midGray">
                    Follow guidelines and requirements to create your design within the specified timeframe
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-accent text-white flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Submit for Feedback</h3>
                  <p className="text-adorzia-midGray">
                    Upload your work to receive constructive feedback from instructors and peers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adorzia-accent text-white flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Earn Recognition</h3>
                  <p className="text-adorzia-midGray">
                    Gain experience points, unlock achievements, and add completed challenges to your portfolio
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-subtle max-w-md">
                <div className="mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 text-adorzia-accent mr-3" />
                  <h3 className="text-xl font-medium">Pro Tip</h3>
                </div>
                <p className="text-adorzia-midGray mb-6">
                  StyleBox challenges are designed to be completed within 2-8 hours, depending on the difficulty level. Start with easier challenges and work your way up as you build confidence.
                </p>
                <div className="p-4 bg-adorzia-accent/10 rounded-lg">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-adorzia-accent mr-2" />
                    <span className="font-medium">Did you know?</span>
                  </div>
                  <p className="text-sm mt-2">
                    Students who complete at least one StyleBox challenge per week show 40% faster skill development compared to those who don't.
                  </p>
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

export default StyleBoxPage;
