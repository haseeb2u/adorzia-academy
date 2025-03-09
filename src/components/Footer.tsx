
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-adorzia-darkGray text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">
              Adorzia <span className="text-adorzia-accent">Academy</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Structured learning for fashion designers at all levels. Progress through guided courses, certifications, and hands-on challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">StyleBox Challenges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For Businesses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-xl mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Showcase</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Industry Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-adorzia-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">1234 Fashion Avenue, Design District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-adorzia-accent flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-adorzia-accent flex-shrink-0" />
                <span className="text-gray-300">contact@adorzia-academy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Adorzia Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
