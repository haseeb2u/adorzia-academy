
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock, CheckCircle, Book, Puzzle, FileText, LockKeyhole } from 'lucide-react';

const DemoCourse = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-adorzia-accent/10 py-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <Link to="/courses" className="text-adorzia-accent flex items-center mb-4 hover:underline">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                Back to All Courses
              </Link>
              <Badge className="bg-blue-50 text-blue-600 mb-2">Beginner Level</Badge>
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">Fashion Design Fundamentals</h1>
              <p className="text-adorzia-midGray max-w-2xl">A comprehensive introduction to fashion design principles, techniques, and practices for beginners.</p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
                Enroll Now
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center text-sm text-adorzia-midGray">
              <Book className="w-4 h-4 mr-1" />
              5 Modules
            </div>
            <div className="flex items-center text-sm text-adorzia-midGray">
              <Puzzle className="w-4 h-4 mr-1" />
              5 StyleBox Challenges
            </div>
            <div className="flex items-center text-sm text-adorzia-midGray">
              <Clock className="w-4 h-4 mr-1" />
              8 Weeks Duration
            </div>
            <div className="flex items-center text-sm text-adorzia-midGray">
              <CheckCircle className="w-4 h-4 mr-1" />
              Certification Upon Completion
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16" ref={sectionRef}>
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              {/* Module 1 */}
              <div className="reveal">
                <h2 className="text-2xl font-medium mb-6 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-adorzia-accent text-white text-sm mr-3">1</span>
                  Introduction to Fashion Design
                </h2>
                
                <div className="card p-8 mb-8">
                  <div className="flex items-start mb-6">
                    <Book className="w-5 h-5 text-adorzia-accent mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium mb-4">📖 Theory: Understanding Fashion Design</h3>
                      <p className="text-adorzia-midGray mb-4">
                        Fashion design is the art of applying design, aesthetics, and natural beauty to clothing and accessories. 
                        It is influenced by cultural and social attitudes and has evolved over time. Designers work in a range of ways, 
                        from creating haute couture to ready-to-wear collections.
                      </p>
                      
                      <h4 className="font-medium mb-2">🔹 Key Concepts:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-adorzia-midGray mb-4">
                        <li>The evolution of fashion through history</li>
                        <li>The role of a fashion designer</li>
                        <li>The difference between haute couture and ready-to-wear</li>
                        <li>Emerging trends in modern fashion</li>
                      </ul>
                      
                      <Button variant="outline" className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Access Learning Materials
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="card p-8 border-l-4 border-adorzia-accent">
                  <div className="flex items-start">
                    <Puzzle className="w-5 h-5 text-adorzia-accent mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium mb-4">🛠 StyleBox Practice: Minimalist Streetwear Outfit</h3>
                      
                      <div className="bg-adorzia-lightGray p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">🎯 Challenge Overview:</h4>
                        <p className="text-adorzia-midGray">
                          Design a Minimalist Streetwear Outfit using a neutral color palette and structured silhouettes. 
                          The goal is to create a modern, sleek, and wearable design.
                        </p>
                      </div>
                      
                      <h4 className="font-medium mb-2">📌 Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-adorzia-midGray mb-6">
                        <li><span className="font-medium">Color Palette:</span> Neutral tones (white, black, grey, beige)</li>
                        <li><span className="font-medium">Silhouette & Fit:</span> Oversized or structured fits</li>
                        <li><span className="font-medium">Fabrics:</span> Cotton, denim, or soft fleece</li>
                        <li><span className="font-medium">Styling Elements:</span> Minimalist accessories, monochrome layering</li>
                        <li><span className="font-medium">Submission Format:</span> Digital sketch or flat-lay design</li>
                      </ul>
                      
                      <div className="flex items-center mb-6">
                        <Clock className="w-4 h-4 text-adorzia-accent mr-2" />
                        <span className="text-sm font-medium">Time Limit: 60 minutes</span>
                      </div>
                      
                      <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
                        Start StyleBox Challenge
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="reveal reveal-delay-1">
                <h2 className="text-2xl font-medium mb-6 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-adorzia-accent/20 text-adorzia-accent text-sm mr-3">2</span>
                  Understanding Fabrics & Materials
                </h2>
                
                <div className="card p-8 mb-8 opacity-75">
                  <div className="flex items-start mb-6">
                    <Book className="w-5 h-5 text-adorzia-accent mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium mb-4">📖 Theory: Different Types of Fabrics</h3>
                      <p className="text-adorzia-midGray mb-4">
                        Fabrics define the comfort, texture, and durability of a garment. Understanding materials helps designers make better choices.
                      </p>
                      
                      <h4 className="font-medium mb-2">🔹 Key Concepts:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-adorzia-midGray mb-4">
                        <li>Natural vs. Synthetic fabrics</li>
                        <li>Fabric textures and their impact on design</li>
                        <li>Choosing the right fabric for different garments</li>
                      </ul>
                      
                      <div className="bg-adorzia-lightGray p-4 rounded-lg">
                        <div className="flex items-center text-adorzia-midGray">
                          <LockKeyhole className="w-4 h-4 mr-2 text-adorzia-accent" />
                          <span>Complete Module 1 to unlock this content</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-8 border-l-4 border-adorzia-accent/30 opacity-75">
                  <div className="flex items-start">
                    <Puzzle className="w-5 h-5 text-adorzia-accent mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-medium mb-4">🛠 StyleBox Practice: Casual T-Shirt Design</h3>
                      
                      <div className="bg-adorzia-lightGray p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">🎯 Challenge Overview:</h4>
                        <p className="text-adorzia-midGray">
                          Create a Casual T-Shirt Design with a focus on fabric selection. Ensure it is comfortable, 
                          breathable, and suitable for daily wear.
                        </p>
                      </div>
                      
                      <h4 className="font-medium mb-2">📌 Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-adorzia-midGray mb-6">
                        <li><span className="font-medium">Color Palette:</span> Any two-tone combination</li>
                        <li><span className="font-medium">Fabric Selection:</span> Cotton, jersey, or polyester blend</li>
                        <li><span className="font-medium">Silhouette:</span> Regular or oversized fit</li>
                        <li><span className="font-medium">Graphic/Print (Optional):</span> Minimalist typography or abstract design</li>
                        <li><span className="font-medium">Submission Format:</span> Digital sketch or flat-lay illustration</li>
                      </ul>
                      
                      <div className="flex items-center mb-6">
                        <Clock className="w-4 h-4 text-adorzia-accent mr-2" />
                        <span className="text-sm font-medium">Time Limit: 90 minutes</span>
                      </div>
                      
                      <div className="bg-adorzia-lightGray p-4 rounded-lg">
                        <div className="flex items-center text-adorzia-midGray">
                          <LockKeyhole className="w-4 h-4 mr-2 text-adorzia-accent" />
                          <span>Complete Module 1 StyleBox Challenge to unlock this challenge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24 reveal reveal-delay-2">
                <h3 className="text-xl font-medium mb-4">Course Progress</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-adorzia-accent text-white flex items-center justify-center text-sm mr-3">1</div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">Introduction to Fashion Design</div>
                      <div className="text-xs text-adorzia-midGray">In progress</div>
                    </div>
                    <div className="w-2 h-2 bg-adorzia-accent rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-8 h-8 rounded-full bg-adorzia-accent/20 text-adorzia-accent flex items-center justify-center text-sm mr-3">2</div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">Understanding Fabrics & Materials</div>
                      <div className="text-xs text-adorzia-midGray">Locked</div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-8 h-8 rounded-full bg-adorzia-accent/20 text-adorzia-accent flex items-center justify-center text-sm mr-3">3</div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">Color Theory & Fashion Trends</div>
                      <div className="text-xs text-adorzia-midGray">Locked</div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-8 h-8 rounded-full bg-adorzia-accent/20 text-adorzia-accent flex items-center justify-center text-sm mr-3">4</div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">Silhouettes & Garment Construction</div>
                      <div className="text-xs text-adorzia-midGray">Locked</div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-8 h-8 rounded-full bg-adorzia-accent/20 text-adorzia-accent flex items-center justify-center text-sm mr-3">5</div>
                    <div className="flex-grow">
                      <div className="text-sm font-medium">Final Challenge & Certification</div>
                      <div className="text-xs text-adorzia-midGray">Locked</div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-adorzia-accent/10 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-adorzia-accent mr-2" />
                    Course Completion
                  </h4>
                  <p className="text-sm text-adorzia-midGray mb-3">
                    Complete all modules and StyleBox challenges to earn your Fashion Design Fundamentals certification.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-adorzia-accent h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="text-xs text-right mt-1 text-adorzia-midGray">10% complete</div>
                </div>
                
                <Button className="w-full bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
                  Continue Learning
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DemoCourse;
