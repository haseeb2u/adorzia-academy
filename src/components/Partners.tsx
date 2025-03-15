
import React, { useEffect, useRef } from 'react';
import { 
  Building, 
  Briefcase, 
  Users, 
  Globe, 
  Award,
  Sparkles
} from 'lucide-react';

const Partners = () => {
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

  const partners = [
    {
      name: "Fashion Institute of Design",
      description: "Internationally recognized fashion education institution with campuses in Milan and Paris.",
      type: "Education",
      icon: <Building className="h-8 w-8 text-adorzia-primary opacity-80" />,
    },
    {
      name: "Global Designer Network",
      description: "An exclusive network of over 5,000 professional designers across 40 countries.",
      type: "Industry Network",
      icon: <Globe className="h-8 w-8 text-adorzia-accent opacity-80" />,
    },
    {
      name: "Enterprise Fashion Brands",
      description: "Collection of premium fashion brands offering internships and career opportunities to our graduates.",
      type: "Corporate Partners",
      icon: <Briefcase className="h-8 w-8 text-adorzia-tertiary opacity-80" />,
    },
    {
      name: "Sustainable Textiles Consortium",
      description: "Promoting sustainable practices and materials in the fashion industry.",
      type: "Sustainability",
      icon: <Sparkles className="h-8 w-8 text-green-500 opacity-80" />,
    },
    {
      name: "Fashion Tech Accelerator",
      description: "Supporting innovation at the intersection of fashion and technology.",
      type: "Technology",
      icon: <Award className="h-8 w-8 text-blue-500 opacity-80" />,
    },
    {
      name: "Global Fashion Mentors Alliance",
      description: "International group of fashion industry veterans providing mentorship to emerging designers.",
      type: "Mentorship",
      icon: <Users className="h-8 w-8 text-purple-500 opacity-80" />,
    },
  ];

  return (
    <section id="partners" className="py-24 bg-adorzia-lightGray" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge reveal">Industry Connections</div>
          <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
            Our <span className="text-adorzia-accent">Strategic Partners</span>
          </h2>
          <p className="text-adorzia-midGray reveal reveal-delay-2">
            Adorzia Academy collaborates with leading fashion industry organizations to provide 
            our students with unparalleled opportunities, resources, and professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 reveal ${
                index % 3 === 1 ? 'reveal-delay-1' : index % 3 === 2 ? 'reveal-delay-2' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-adorzia-lightGray rounded-full">
                  {partner.icon}
                </div>
                <div>
                  <span className="text-xs font-medium text-adorzia-accent block mb-1">
                    {partner.type}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{partner.name}</h3>
                  <p className="text-sm text-adorzia-midGray">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal reveal-delay-3">
          <p className="text-adorzia-midGray mb-4">
            Interested in becoming a partner? Let's create opportunities together.
          </p>
          <a 
            href="mailto:partners@adorziaacademy.com" 
            className="inline-flex items-center text-adorzia-accent hover:text-adorzia-accentHover font-medium transition-colors"
          >
            Contact our partnerships team
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
