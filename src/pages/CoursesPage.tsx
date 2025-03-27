
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseStructure, { CourseProps } from '@/components/CourseStructure';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LearningPath from '@/components/LearningPath';
import StyleBox from '@/components/StyleBox';
import CertificationPath from '@/components/CertificationPath';
import { Award, ChevronRight } from 'lucide-react';

const CoursesPage = () => {
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

  const courses: CourseProps[] = [
    {
      title: "Fashion Design Fundamentals",
      level: "Beginner Level",
      emoji: "🏆",
      objective: "Master the basics of fashion design, from sketching to color theory, with hands-on StyleBox challenges.",
      access: {
        type: "Registered",
        description: "Open to All Users"
      },
      modules: [
        {
          title: "Introduction to Fashion Design",
          theory: "What is Fashion Design? History & Evolution.",
          practice: "Create a Minimalist Streetwear Outfit.",
          difficulty: "Easy"
        },
        {
          title: "Understanding Fabrics & Materials",
          theory: "Types of fabrics, textures, and material selection.",
          practice: "Design a Casual T-shirt with fabric constraints.",
          difficulty: "Medium"
        },
        {
          title: "Color Theory & Fashion Trends",
          theory: "Primary, Secondary Colors & Fashion Seasons.",
          practice: "Create a Monochrome Outfit using assigned color palette.",
          difficulty: "Hard"
        },
        {
          title: "Silhouettes & Garment Construction",
          theory: "Different silhouettes and their impact on fashion.",
          practice: "Design a Formal Suit with defined silhouette rules.",
          difficulty: "Hard"
        },
        {
          title: "Final Challenge & Certification",
          theory: "Review of all learned concepts and preparation for final assessment.",
          practice: "Create a Capsule Wardrobe (5-item collection).",
          difficulty: "Hard"
        }
      ],
      certification: true
    },
    {
      title: "Advanced Textile Design & Patterns",
      level: "Intermediate Level",
      emoji: "🎨",
      objective: "Deep dive into fabric textures, digital prints, and pattern creation for fashion designers.",
      access: {
        type: "Paid",
        description: "Requires Subscription"
      },
      modules: [
        {
          title: "Fabric Weaving & Surface Design",
          theory: "Types of textile weaving & embroidery techniques.",
          practice: "Design a Luxury Scarf Print using weaving patterns.",
          difficulty: "Medium"
        },
        {
          title: "Digital Print & Pattern Creation",
          theory: "How to create seamless textile patterns using digital tools.",
          practice: "Create a Floral Pattern Print for a summer dress.",
          difficulty: "Medium"
        },
        {
          title: "Textile Innovation & Sustainability",
          theory: "Sustainable fabrics and eco-friendly printing methods.",
          practice: "Design a Sustainable Activewear Set with material constraints.",
          difficulty: "Hard"
        },
        {
          title: "Final Textile Design Challenge",
          theory: "Application of advanced textile design techniques in a comprehensive project.",
          practice: "Create a Complete Textile Print Collection (3 unique patterns).",
          difficulty: "Hard"
        }
      ],
      certification: true
    },
    {
      title: "Fashion Entrepreneurship & Business",
      level: "Expert Level",
      emoji: "📈",
      objective: "Learn how to monetize designs, set up a fashion brand, and sell successfully.",
      access: {
        type: "Exclusive",
        description: "For VIP Users Only"
      },
      modules: [
        {
          title: "Branding & Identity in Fashion",
          theory: "How to create a unique brand identity.",
          practice: "Develop a Brand Mood Board & logo design.",
          difficulty: "Medium"
        },
        {
          title: "Pricing & Market Strategy",
          theory: "Costing, pricing strategy, and market segmentation.",
          practice: "Create a Luxury Streetwear Price Sheet.",
          difficulty: "Medium"
        },
        {
          title: "Online Sales & E-commerce for Designers",
          theory: "How to sell through marketplaces & social media.",
          practice: "Build a Fashion Lookbook for online sales.",
          difficulty: "Hard"
        },
        {
          title: "Scaling & Funding a Fashion Brand",
          theory: "Investment strategies, pitching to investors, and scaling operations.",
          practice: "Pitch a Fashion Startup Idea with mock designs & pricing strategy.",
          difficulty: "Hard"
        }
      ],
      certification: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-24" ref={sectionRef}>
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge reveal">Adorzia Academy</div>
            <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
              Structured <span className="text-adorzia-accent">Learning Paths</span>
            </h2>
            <p className="text-adorzia-midGray reveal reveal-delay-2">
              Our comprehensive courses combine theoretical knowledge with practical StyleBox challenges, 
              allowing you to master fashion design skills step by step.
            </p>
          </div>

          {/* ACFD Certification Banner */}
          <div className="card p-6 md:p-8 mb-8 bg-amber-50 border-amber-300 reveal">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <Badge className="bg-amber-200 text-amber-800 mb-2">Professional Certification</Badge>
                  <h3 className="text-xl md:text-2xl font-medium mb-2">Adorzia Certified Fashion Designer (ACFD)</h3>
                  <p className="text-adorzia-midGray mb-4 md:mb-0">
                    Our comprehensive 12-module certification program with StyleBox challenges and industry recognition.
                  </p>
                </div>
              </div>
              <Link to="/courses/acfd" className="md:ml-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center">
                  View Certification
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Demo Course Banner */}
          <div className="card p-6 md:p-8 mb-8 bg-adorzia-accent/5 border-adorzia-accent reveal">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <Badge className="bg-green-50 text-green-600 mb-2">Featured Demo</Badge>
                <h3 className="text-xl md:text-2xl font-medium mb-2">Fashion Design Fundamentals</h3>
                <p className="text-adorzia-midGray mb-4 md:mb-0">
                  Experience our detailed module-by-module learning path with interactive StyleBox challenges.
                </p>
              </div>
              <Link to="/courses/demo">
                <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white">
                  View Demo Course
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <div 
                key={course.title} 
                className={`reveal ${index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''}`}
              >
                <CourseStructure {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LearningPath />
      
      <StyleBox />
      
      <CertificationPath />
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
